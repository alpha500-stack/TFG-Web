$job = Start-Job -ScriptBlock { 
    Set-Location $using:PWD
    astro dev 
}
Receive-Job -Job $job -Wait
Remove-Job -Job $job

