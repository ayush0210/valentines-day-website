# Valentine's Day Website 💕

A cute interactive Valentine's Day website with a fun twist - the "No" button runs away!

## Features

- Beautiful gradient background with floating hearts animation
- Interactive "No" button that moves away when cursor gets close
- Big "Yes" button that's easy to click
- Celebration page with confetti animation
- Fully responsive design for mobile and desktop
- Cute GIFs from Giphy

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. Install Vercel CLI (if you haven't already):
   ```bash
   npm install -g vercel
   ```

2. Navigate to your project folder:
   ```bash
   cd /Users/ayushmishra/Desktop/Valentines
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts (just press Enter for defaults)

5. Your site will be live! You'll get a URL like: `https://valentines-xxx.vercel.app`

**Or use Vercel Website (No CLI needed):**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import this folder
5. Click "Deploy"

### Option 2: GitHub Pages

1. Create a new repository on GitHub

2. Initialize git in your project folder:
   ```bash
   cd /Users/ayushmishra/Desktop/Valentines
   git init
   git add .
   git commit -m "Initial commit - Valentine's website"
   ```

3. Add remote and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

4. Enable GitHub Pages:
   - Go to your repository settings
   - Scroll to "Pages"
   - Select "main" branch as source
   - Click Save

5. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### Option 3: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the Valentines folder
3. Your site is live instantly!

## Testing Locally

Simply open `index.html` in your web browser to test locally.

## Customization

- Change "Rachel" to another name in `index.html` (line 23)
- Modify colors in `styles.css`
- Change GIFs by replacing the Giphy URLs in `index.html`
- Adjust the proximity threshold for the No button in `script.js` (line 49)

## Tech Stack

- Pure HTML, CSS, and JavaScript (No frameworks needed!)
- Google Fonts (Pacifico & Poppins)
- Giphy for cute animations

Good luck! 💖
