$path = Join-Path $PSScriptRoot 'index.html'

if (Test-Path $path) {
    Start-Process $path
} else {
    Write-Error "File not found: $path"
}
