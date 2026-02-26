# Adding Your Eclipse Video to the Frumefni Website

## Quick Start

To add your eclipse video to the hero section:

1. **Place your video file** in the `/public` directory
2. **Name it** `eclipse-animation.mp4` (or update the path in the code)
3. The video will automatically display as the hero background

## Video Requirements

### Recommended Specifications
- **Format**: MP4 (H.264 codec recommended)
- **Resolution**: 1920x1080 or higher
- **Aspect Ratio**: 16:9
- **File Size**: Under 50MB for optimal web performance
- **Duration**: 10-30 seconds (will loop automatically)

### Fallback Options
If you don't have a video yet, the site currently displays:
- Animated eclipse icon (sun and moon)
- Gradient background overlay
- All other visual elements

## Custom Video Path

If you want to use a different filename or location, update line 29 in `/src/components/Hero.jsx`:

```javascript
<source src="/your-video-name.mp4" type="video/mp4" />
```

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

## Alternative: Use External Video Hosting

For larger videos, consider using:
- YouTube (embedded)
- Vimeo
- Cloudinary
- AWS S3

Example for external URL:
```javascript
<source src="https://your-cdn.com/eclipse-video.mp4" type="video/mp4" />
```

## Testing

After adding your video:
```bash
npm run dev
```

Open http://localhost:5173 in your browser to verify the video plays correctly.

---

**Note**: The site is fully functional without a video - the animated eclipse icon and black background provide a stunning visual experience on their own!
