import qrcode

url = "https://c-1485.github.io/wedding-maps/"

qr = qrcode.QRCode(
    version=1,
    box_size=10,
    border=4,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
)
qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("wedding_qr.png")
