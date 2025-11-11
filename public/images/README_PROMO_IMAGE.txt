You provided an image in the chat attachment.

To make the homepage promo use that image, save the attached image file into this repository at:

  public/images/georgia-boot-300x250.png

Notes:
- Use a 300x250 image for best fit in the side promo slot.
- Keep the filename exactly as above so the promo HTML at public/promos/georgia-boot/active.html will reference it correctly.

After saving the image file, run (PowerShell):

  git add public/images/georgia-boot-300x250.png
  git commit -m "Add Georgia Boot promo image"
  git push origin stable-main

If you'd like me to add the image for you, reply "please upload the attached image" and I'll fetch it (if you provide a public URL) or use the chat attachment if your client supports automatic workspace file uploads. Alternatively I can guide you through a drag-and-drop upload step in your editor.
