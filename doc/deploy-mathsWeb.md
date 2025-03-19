# Deploy mathsWeb

## Links & Intro

- [netifly](https://app.netlify.com/)

- [Deploy React on Netlify - Starter Templates &amp; Resources](https://www.netlify.com/with/react/)

- [Build configuration overview | Netlify Docs](https://docs.netlify.com/configure-builds/overview/#basic-build-settings)

- [Monorepos | Netlify Docs](https://docs.netlify.com/configure-builds/monorepos/)

- [Build configuration overview | Netlify Docs](https://docs.netlify.com/configure-builds/overview/)

- [mathsWeb](https://mathswebspace.netlify.app/)

From Netifly:

> With continuous deployment configured, you can specify how Netlify will build your site. You can specify these settings when you first [add your site from an existing repository](https://docs.netlify.com/welcome/add-new-site/#import-from-an-existing-repository) and anytime afterwards by going to [**Site configuration > Build & deploy > Continuous deployment > Build settings**](https://app.netlify.com/sites/mathswebspace/configuration/deploys#build-settings).

## Step by step

![](https://docs.netlify.com/images/configure-builds-edit-build-settings-ui.png)

To deploy your Vite-based React project (located in the `/mathsWeb` directory of our monorepo) to **Netlify**, we should follow these steps:

### Step 1: Prepare Your Project for Deployment

1. **Ensure the Project Builds Locally**:
   
   - Navigate to the `/mathsWeb` directory:
     
     ```bash
     cd mathsWeb
     ```
   
   - Install dependencies (if not already installed):
     
     ```bash
     npm install
     ```
   
   - Build the project:
     
     ```bash
     npm run build
     ```
   
   - Verify that the `dist` folder is generated in the `/mathsWeb` directory. This folder contains the production-ready files.

2. **Update `vite.config.js` (if necessary)**:
   
   - Ensure your `vite.config.js` is correctly configured for production. For example:
     
     ```javascript
     import { defineConfig } from "vite";
     import react from "@vitejs/plugin-react";
     
     export default defineConfig({
       plugins: [react()],
       base: "/", // Set the base path if your app is not served from the root
     });
     ```

### Step 2: Push Your Code to a Git Repository

1. **Initialize a Git Repository (if not already initialized)**:
   
   - Navigate to the root of your monorepo:
     
     ```bash
     cd ~/MyProjects/ReactProject/mathsWeb
     ```
   
   - Initialize Git (if not already initialized):
     
     ```bash
     git init
     ```
   
   - Add all files and commit:
     
     ```bash
     git add .
     git commit -m "Initial commit"
     ```

2. **Push to a Remote Repository**:
   
   - Create a new repository on GitHub, GitLab, or any other Git hosting service.
   
   - Add the remote repository URL:
     
     ```bash
     git remote add origin https://github.com/AlbertProfe/mathsWeb.git
     ```
   
   - Push your code:
     
     ```bash
     git push -u origin master
     ```

### Step 3: Deploy to Netlify

1. **Log in to Netlify**:
   
   - Go to [Netlify](https://app.netlify.com/) and log in with your GitHub, GitLab, or Bitbucket account.

2. **Create a New Site**:
   
   - Click on **Add new site** > **Import an existing project**.
   - Connect to your Git provider (e.g., GitHub) and select the repository containing your project.

3. **Configure Build Settings**:
   
   - Netlify will detect that your project is in a subdirectory (`/mathsWeb`). Configure the build settings as follows:
     - **Base directory**: `mathsWeb`
     - **Build command**: `npm run build`
     - **Publish directory**: `mathsWeb/dist`

4. **Deploy the Site**:
   
   - Click **Deploy site**. Netlify will start the build process and deploy your project.

5. **Set Up Environment Variables (if needed)**:
   
   - If your project uses environment variables (e.g., API keys), go to **Site settings** > **Build & deploy** > **Environment** and add the variables.

6. **Access Your Deployed Site**:
   
   - Once the build is complete, Netlify will provide you with a live URL for your site (e.g., `https://your-site-name.netlify.app`).

### Step 4: Configure Custom Domain (Optional)

1. **Add a Custom Domain**:
   
   - Go to **Site settings** > **Domain management**.
   - Click **Add custom domain** and follow the instructions to configure your domain.

2. **Set Up HTTPS**:
   
   - Netlify automatically provisions an SSL certificate for your site. Ensure HTTPS is enabled in **Site settings** > **Domain management**.

### Step 5: Automate Deployments (Optional)

1. **Enable Continuous Deployment**:
   
   - Netlify automatically deploys your site whenever you push changes to the connected Git repository.

2. **Preview Deployments**:
   
   - Netlify creates preview deployments for pull requests, allowing you to test changes before merging.

### Notes for Monorepo Deployments

- **Base Directory**: Since your project is in a subdirectory (`/mathsWeb`), ensure you set the **Base directory** correctly in Netlify's build settings.
- **Shared Dependencies**: If your monorepo has shared dependencies, ensure they are properly installed and referenced in your project.



### Example Netlify Configuration

If you want to use a `netlify.toml` file for more control over the build process, create a `netlify.toml` file in the root of your monorepo with the following content:

```toml
[build]
  base = "mathsWeb"
  publish = "mathsWeb/dist"
  command = "npm run build"
```

Push this file to your repository, and Netlify will use these settings during deployment.

### Troubleshooting

- **Build Failures**: Check the build logs in Netlify for errors. Common issues include missing dependencies or incorrect build commands.
- **Environment Variables**: Ensure all required environment variables are set in Netlify.
- **Caching**: If builds are slow, enable caching for `node_modules` in Netlify's build settings.

---

By following these steps, your Vite-based React project in the `/mathsWeb` directory of your monorepo will be successfully deployed to Netlify! 🚀

![](https://www.dropbox.com/scl/fi/4il6k10l1efmy72w878e1/IMAGE-001053.png?rlkey=8id880dngmtekj26omjopf8c2&st=cu9lcyru&dl=1)
