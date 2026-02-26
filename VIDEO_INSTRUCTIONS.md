# Adding Your Eclipse Video to the Frumefni Website

## Current Video

The site is currently configured to use a **Cloudinary-hosted eclipse video**:

**Direct URL**: 
```
https://res.cloudinary.com/dksj2niho/video/upload/Revealing_Solar_Corona_With_Human_Figure_ym9kql.mp4
```

**Cloudinary Details**:
- Cloud Name: `dksj2niho`
- Public ID: `Revealing_Solar_Corona_With_Human_Figure_ym9kql`
- Embed URL: https://player.cloudinary.com/embed/?cloud_name=dksj2niho&public_id=Revealing_Solar_Corona_With_Human_Figure_ym9kql

This stunning video shows a revealing solar corona with a human figure, perfectly capturing the essence of the Frumefni experience.

## Using a Different Video

If you want to replace the current video with your own:

### Option 1: Local Video File

1. **Place your video file** in the `/public` directory
2. **Name it** `eclipse-animation.mp4` (or use a custom name)
3. **Update** `/src/components/Hero.jsx` line 35:
   ```javascript
   <source src="/eclipse-animation.mp4" type="video/mp4" />
   ```

### Option 2: External URL (Cloudinary, CDN, etc.)

1. **Upload your video** to Cloudinary, AWS S3, or another CDN
2. **Update** `/src/components/Hero.jsx` line 35 with your URL:
   ```javascript
   <source src="https://your-cdn.com/your-video.mp4" type="video/mp4" />
   ```

## Video Requirements

### Recommended Specifications
- **Format**: MP4 (H.264 codec recommended)
- **Resolution**: 1920x1080 or higher
- **Aspect Ratio**: 16:9
- **File Size**: Under 50MB for optimal web performance
- **Duration**: 10-30 seconds (will loop automatically)

### Fallback Display
If the video fails to load, the site displays:
- Animated eclipse icon (sun and moon)
- Gradient background overlay
- All other visual elements remain functional

## Video Optimization Tips

1. **Compress your video** using tools like:
   - HandBrake (free, open-source)
   - Adobe Media Encoder
   - Online tools like CloudConvert

2. **Consider multiple formats** for browser compatibility:
   ```html
   <source src="/eclipse-animation.webm" type="video/webm" />
   <source src="/eclipse-animation.mp4" type="video/mp4" />
   ```

3. **Test loading times** on different connections

## Testing

After adding your video:
```bash
npm run dev
```

Open http://localhost:5173 in your browser to verify the video plays correctly.

---

**Note**: The site is fully functional without a video - the animated eclipse icon and black background provide a stunning visual experience on their own!
