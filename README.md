## My Personal Portfolio Site

Simple plain vanilla javascript. No frameworks. No jQuery.

Plain and simple.

_Requirements for project_

<ul>  
<li>
    Need to turn on 2FA on the gmail account you want to use as smtp server. 
</li>
<li>Add an app to your gmail account</li>
<li>Set an environment variable in netlify site settings for gmail app password.Remember to run ntl link locally to link it to local dev environment</li>
<li>Deploy to Netlify and create a functions directory to put your serverless function in.</li>
</ul>

## Image Compression
We use Google's [Webp](https://developers.google.com/speed/webp/docs/using) library to convert and compress all images in the /img folder. We have a little powershell script (bulk-convert.ps1) that you can run and will convert all .jpg & .png files in directory to .webp files at 60% quality. If you want to convert one file on the fly the command is __cwebp -q 80 image.png -o image.webp__

Note: When installing Webp unzip the archive and move it to the __Program Files__ directory. ***Important*** Remember to add the cwebp.exe directory to your $PATH variable and reboot.
