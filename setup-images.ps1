# Setup Images for Benjamin's Tutoring Website
# Based on actual photo content from the Media folder

$imagesPath = "public\assets\images"
if (!(Test-Path $imagesPath)) {
    New-Item -ItemType Directory -Path $imagesPath -Force
}

$mediaPath = "Media"
$files = Get-ChildItem -Path $mediaPath -Filter "*.jpg*"

Write-Host "Found $($files.Count) images in Media folder" -ForegroundColor Cyan
Write-Host ""

# Photo content mapping (based on provided screenshots):
# 1_1_1 = Casual (gray hoodie on bed)
# 2_1_1 = Professional suit outside with badge
# 2_2_1 = UN General Assembly - smiling
# 2_3_1 = UN General Assembly - serious
# 2_4_1 = Formal selfie in auditorium
# 2_5_1 = Music trio (clarinet, sax) by lake
# 2_6_1 = Cockpit view from behind
# 3_1_1 = UN DESA badge close-up
# 4_1_1 = Working at UN with laptop/headphones
# 5_1_1 = Large band group photo
# 6_1_1 = Cockpit thumbs up smiling
# 7_1_1 = Night flying cockpit

$mappings = @{
    # HERO - Professional suit photo
    "2_1_1" = "profile-1.jpg"
    
    # ABOUT SECTION
    "2_2_1" = "about-1.jpg"    # UN smiling - main
    "2_5_1" = "about-2.jpg"    # Music trio
    "4_1_1" = "about-3.jpg"    # Working at UN
    
    # GALLERY - All activities
    "2_3_1" = "gallery-1.jpg"  # UN serious
    "3_1_1" = "gallery-2.jpg"  # Badge close-up
    "2_4_1" = "gallery-3.jpg"  # Auditorium selfie
    "5_1_1" = "gallery-4.jpg"  # Band group
    "2_6_1" = "gallery-5.jpg"  # Cockpit behind
    "6_1_1" = "gallery-6.jpg"  # Cockpit thumbs up
    "7_1_1" = "gallery-7.jpg"  # Night flying
    "1_1_1" = "gallery-8.jpg"  # Casual photo
}

foreach ($file in $files) {
    foreach ($prefix in $mappings.Keys) {
        if ($file.Name.StartsWith($prefix)) {
            $newName = $mappings[$prefix]
            $destination = Join-Path $imagesPath $newName
            Copy-Item $file.FullName -Destination $destination -Force
            Write-Host "Copied: $prefix... -> $newName" -ForegroundColor Green
        }
    }
}

Write-Host ""
Write-Host "Done! Images copied to $imagesPath" -ForegroundColor Cyan
