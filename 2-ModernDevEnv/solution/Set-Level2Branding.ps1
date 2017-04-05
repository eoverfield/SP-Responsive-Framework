﻿<#
.REQUIREMENTS
Requires PnP-PowerShell version 2.7.1609.3 or later
https://github.com/OfficeDev/PnP-PowerShell/releasess

.SYNOPSIS
Set Alternative CSS and a custom logo

.EXAMPLE
PS C:\> .\Set-Level2Branding.ps1 -TargetWebUrl "https://intranet.mydomain.com/sites/targetSite/marketing" -TargetSiteUrl "https://intranet.mydomain.com/sites/targetSite" 

.EXAMPLE
PS C:\> $creds = Get-Credential
PS C:\> .\Set-Level2Branding.ps1 -TargetWebUrl "https://intranet.mydomain.com/sites/targetSite" -Credentials $creds
#>

[CmdletBinding()]
param
(
    [Parameter(Mandatory = $true, HelpMessage="Enter the URL of the target web, e.g. 'https://intranet.mydomain.com/sites/targetWeb'")]
    [String]
    $targetWebUrl,

	[Parameter(Mandatory = $false, HelpMessage="Enter the URL of the target asset location, i.e. site collection root web, e.g. 'https://intranet.mydomain.com/sites/targetWeb'")]
    [String]
    $targetSiteUrl,

    [Parameter(Mandatory = $false, HelpMessage="Serve assets from localhost")]
    [Bool]
    $serveLocal,

    [Parameter(Mandatory = $false, HelpMessage="Optional administration credentials")]
    [PSCredential]
    $Credentials
)

if($Credentials -eq $null)
{
	$Credentials = Get-Credential -Message "Enter Admin Credentials"
}
if ($targetSiteUrl -eq "")
{
    $targetSiteUrl = $targetWebUrl
}
if ($serveLocal -ne $true)
{
	$serveLocal = $false
}

Write-Host -ForegroundColor White "--------------------------------------------------------"
Write-Host -ForegroundColor White "|                  Set Level 2 Branding                |"
Write-Host -ForegroundColor White "--------------------------------------------------------"
Write-Host ""
Write-Host -ForegroundColor Yellow "Target web: $($targetWebUrl)"
Write-Host -ForegroundColor Yellow "Target asset location : $($targetSiteUrl)"
Write-Host ""

try
{
	#Set default variables values
	$rootPath = $targetSiteUrl.Substring($targetSiteUrl.IndexOf('/',8))
	$alternateCssPath = "/SiteAssets/custom.level2branding.css"
	$logoPath = "/SiteAssets/ContosoNavLogo.png"

	#if we are to be serving branding assets locally for now, no reason to provision, just set
	if ($serveLocal)
	{
		Write-Host -ForegroundColor White "Not provisioning branding assets - expecting local development hosting"
		Connect-PnPOnline $targetWebUrl -Credentials $Credentials

		#change root path to local host
		$rootPath = "https://localhost:3000"
	}
	else
	{
		Connect-PnPOnline $targetSiteUrl -Credentials $Credentials

		Write-Host -ForegroundColor White "Provisioning asset files to $($targetSiteUrl)"
		Apply-PnPProvisioningTemplate -Path .\templates\Custom.Level2Branding.Infrastructure.xml -Handlers Files

		#If the asset and target locations are different, then open up the target web now
		if($targetSiteUrl -ne $targetWebUrl)
		{	
			Disconnect-PnPnline
			Connect-PnPnline $targetWebUrl -Credentials $Credentials
		}
	}

	#now set the alternative css and logo urls
	$altCssUrl = "$($rootPath)$($alternateCssPath)"
	$logoUrl = "$($rootPath)$($logoPath)"

	Write-Host -ForegroundColor White "Setting alternative css to $($altCssUrl)"

    #https://github.com/OfficeDev/PnP-PowerShell/blob/master/Documentation/SetPnPWeb.md
	Set-PnPWeb -AlternateCssUrl $altCssUrl -SiteLogoUrl $logoUrl


	#Embed JavaScript using custom action
	Write-Host ""
	Write-Host -ForegroundColor White "Setting Custom Action to Embed JavaScript"

	Apply-PnPProvisioningTemplate -Path .\templates\Custom.Level2Branding.Template.xml -Handlers CustomActions,Features -Parameters @{"InfrastructureSiteUrl"=$rootPath}

	Write-Host ""
	Write-Host -ForegroundColor Green "Alterntive CSS applied"
}
catch
{
    Write-Host -ForegroundColor Red "Exception occurred!" 
    Write-Host -ForegroundColor Red "Exception Type: $($_.Exception.GetType().FullName)"
    Write-Host -ForegroundColor Red "Exception Message: $($_.Exception.Message)"
}