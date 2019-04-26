---
title: Install GoDaddy SSL Certificate on Apache
date: 2019-04-26
---

You need 4 files:

- Certificate Signig Request (CSR), `example.com.csr`
- Private Key, `example.com.key`
- SSL Certificate, `example.com.crt` (GoDaddy: `7dbXXXXXXXXfef89.crt`)
- Intermediate Certificate, `example.com.crt` or `intermediate.crt` or `chainfile.crt` (GoDaddy: `gd_bundle-g2-g1.crt`)


```apache
<VirtualHost 192.168.0.1:443>
		DocumentRoot /var/www/html2
		ServerName www.yourdomain.com
		    SSLEngine on
		    SSLCertificateFile /path/to/your_domain_name.crt
		    SSLCertificateKeyFile /path/to/your_private.key
		    SSLCertificateChainFile /path/to/DigiCertCA.crt
</VirtualHost>
```

## CSR

Generate a CSR (Certificate Signing Request) Key. Don't add a passphrase, if you do it'll ask you for the passphrase everytime you restart Apache.

```bash
openssl req -newkey rsa:2048 -nodes -keyout example.com.key -out example.com.csr
```

- `-new` used when creating a new CSR, rather than processing an existing one
- `-key` the name of the file containing the key pair
- `-out` name of the file to receive the CSR

You can use this [CSR Decoder](https://ssltools.godaddy.com/views/csrDecoder) by GoDaddy to check your CSR

```
Generating a 2048 bit RSA private key
..............................+++
.................................+++
writing new private key to 'example.com.key'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:GB
State or Province Name (full name) [Some-State]:England
Locality Name (eg, city) []:London
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Example Ltd.
Organizational Unit Name (eg, section) []:IT
Common Name (e.g. server FQDN or YOUR name) []:example.com
Email Address []:info@example.com

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
```

```
-----BEGIN CERTIFICATE REQUEST-----
MIICzTCCAbUCAQAwgYcxCzAJBgNVBAYTAkdCMRYwFAYDVQQIEw1TdGFmZm9yZHNo
aXJlMRcwFQYDVQQHEw5TdG9rZSBvbiBUcmVudDEjMCEGA1UEChMaUmVkIEtlc3Ry
ZWwgQ29uc3VsdGluZyBMdGQxIjAgBgNVBAMTGXRlc3RjZXJ0LnJlZGtlc3RyZWwu
Y28udWswggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDWLeW88IeAIa3n
23R99i874fh0jetf+STsGPgkfGXGJ++tclKGk3MJE0ijD4PNaxGXUCNULgn2ROyy
bm5sTmGzpEOD+1AAAyV+pLQoFNkHEFuudGqVM6XkPWfqaM2vKvdzUbPPC0X/MfDF
GPxc8AY3TUM385c9c9/WOIF6NUcAvAFIQF0zG7evzJZBqDb4enUnatMSLHmxRWMi
1JeHtfLINXhNitHewEQWgIB3j1xmh7CPO5FeTb6HzQDxc+f7uMisY6s9J/Ph3GeO
CeIDooqU8jnfV5eGEzIMH5CFMZjajrNKF4DYK3YRyUI0K66+v0KILoUntEs++M20
LhOn+VE9AgMBAAGgADANBgkqhkiG9w0BAQUFAAOCAQEAUWE7oBX3SLjYNM53bsBO
lNGnsgAp1P1fiCPpEKaZGEOUJ2xOguIHSu1N1ZigKpWmiAAZxuoagW1R/ANM3jXp
vCLVBRv40AHCFsot9udrdCYjI43aDHAaYvLmT4/Pvpntcn0/7+g//elAHhr9UIoo
MZwwwo6yom67Jwfw/be/g7Mae7mPHZ2lsQTS02hEeqVynIRk2W9meQULrt+/atog
0mqJSBx0WswtHliTc+nXFpQrwFIEzVuPGCOVw7LmCfNmHNCkZVuRSJB/9MdLmrfw
chPI3NeTGSe+BZfsOtpt2/7j+bqeYKFu8B0stLoJBEnihxUoV18uZOmOeuVuX1N6
-----END CERTIFICATE REQUEST-----
```

## Private Key (SSLCertificateKeyFile)
Private Key `SSLCertificateKeyFile` (.key file generated when you cerated the CSR)

```
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEArFygrFCXyihuVVYCbdBEvKn64wiYX7B5C4YG/E3OwCbXa7n+
x8ObV4jJnqwZsHH1SG2I1e3HCkOfJJwQSVX3rKHBLZW855XbQbatqpoZAfhrTC6p
xamp4ECqnPLjU2YGs8QjV1MVlV7xYHulFpOvhJFB9ULcEHa+DjhS6wggkU9qswDI
XpE+YS6HF86hSZll/jV6oLkmUaX3RxFTdInWnnJXNvn19H6r7MbEfsEh491jIwKO
CzKg+DggMJJlDKgRAv7vz7pi3iLn6OCZ4tadz567KsKOLMtR+Q1ZsKdtrrqd+8Or
ZifLeRVy0g4C9PGDERB5FO8ibZoQp/7oErTM+wIDAQABAoIBAG+/lkRh9CeTUwVs
wCJmV0piglDT78aKadA40yqdX6BhDmW/rxnhDkQQYXfIaNdm6vpMWd0pTlSvRuy7
aivB2tRIAzEE1fbnx8GxKKNlSTVn1FkOH/ARchv8kSE0sIIPseS3E5q4OVQgvCor
v/sFQVSXwMW81WSvN8WMauYK3OKYJFmUj9Ib+y3O3MrgKHOB3s8gXE9oh8TkbTWG
BzTS3A3x8CeIgU3MeWIASE6qQWzvew5fmN0lGCJMwgesLudjlrz48DzaROwbvSH/
VmA88Euhx/1FAzQwvmAPPCoDSk2QcKnegrxT/4luQ1GzX53jPP0EWQceElGfK4ur
cnvx9lECgYEA0pmR1pkZjh+nza9ezJ+L48Z4vV1dAIFqfvVr78rtyKXBb/diXwoz
OC2ywypUtRc6vwIVxi9lpYB6Jno2kvHI/bmVYyu6/hywxoQDmq6CwvRKUZTTDtl4
TJ9xFWZajM+wsgNDOxiJAuLC6Onz9tuJWmyhZkWu9dKw1ngTO//v0WcCgYEA0YTN
8wtrGcQfbc75yC6+iCDSyC6FR2l4OZZlMfObiw56LyQpoRJKJ9pyCmv3M/0tyxlO
MlbLUuGef8bgty0QUo6waFLQfyqvhGXDoS5/4ctHYHIOlU8t8KGlo+YMaNliBGTb
/XmGkGboRCNSoz7aUG311tcpLKSjbWHTRSu/B00CgYEAsHNXC9SO4tOHBwDOjueG
j7t04kRdbdUA44rBetIt1JV8s1E0rKihLYqsYnUPMANchzk6ASkpIze4IJD5NLk8
S8m4brTvIYXsXwew9WMN0EZaFmx5QdHXx2s3llSBvcUuKJgvNk5iTXatE/UhIU3j
kU2/FS+BXhm/bJKCmxzfVDUCgYA/3zeVr1ZwHWzjYeSd1To6b58ybZQt6AZBsAqb
hsNVSg2Pj3utYdD/g0WezbknvTgXoVhIWlNTqfpSw8M/tFo0gNFgjFaJXe7x8sAH
xBAyOnFBAqRVejTsFatUYs5HrHWIF2NFS6XtIaIPG6GWqJOPT2ZRn3gq5un3b4oj
nSl4RQKBgQCdDKEcilR0ssQUXS79x1LAfX8yUaTHXXm4JE9cYyLyWhzr1H/Nb91K
L2x4na2WNYQbSwQRn0x5liyJ5xY/nUWTh/8JxLI6bOPtQOc7d1jboXs1gRkWcsYe
EuK2rCsC8DS1iIAMazgCWxHvrvryQhlds/ww1RtIsAmx+grrQsXGVw==
-----END RSA PRIVATE KEY-----
```

## SSL Certificate (SSLCertificateFile)

```
-----BEGIN CERTIFICATE-----
MIIDBzCCAe+gAwIBAgIJAJcSQFi90ZmwMA0GCSqGSIb3DQEBBQUAMBoxGDAWBgNV
BAMMD3d3dy5leGFtcGxlLmNvbTAeFw0xOTA0MjYxMTU5MzdaFw0yOTA0MjMxMTU5
MzdaMBoxGDAWBgNVBAMMD3d3dy5leGFtcGxlLmNvbTCCASIwDQYJKoZIhvcNAQEB
BQADggEPADCCAQoCggEBAKxcoKxQl8ooblVWAm3QRLyp+uMImF+weQuGBvxNzsAm
12u5/sfDm1eIyZ6sGbBx9UhtiNXtxwpDnyScEElV96yhwS2VvOeV20G2raqaGQH4
a0wuqcWpqeBAqpzy41NmBrPEI1dTFZVe8WB7pRaTr4SRQfVC3BB2vg44UusIIJFP
arMAyF6RPmEuhxfOoUmZZf41eqC5JlGl90cRU3SJ1p5yVzb59fR+q+zGxH7BIePd
YyMCjgsyoPg4IDCSZQyoEQL+78+6Yt4i5+jgmeLWnc+euyrCjizLUfkNWbCnba66
nfvDq2Yny3kVctIOAvTxgxEQeRTvIm2aEKf+6BK0zPsCAwEAAaNQME4wHQYDVR0O
BBYEFJx5b5vLJnRlXFaerQiyHDor4JWPMB8GA1UdIwQYMBaAFJx5b5vLJnRlXFae
rQiyHDor4JWPMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADggEBAKg2FdRf
Q7TOO0rbD4lZbIEFrOYUL8/1uOIFTtS3+jjvWpkHWuuzlDQuGeDyhOPCZbULHlcc
R5Wcap5W0MQfdzBTMoyEMQFBZdWQJ0hBhjeBGONYYrVmQjQdKMRaEkfVEddtROq0
P9rslcv2o1f1I9f31X9mUuZfwLb/wkPV+/blBbnIBEbeoiNGzR2e4d+WhHGvbXYV
xrEB3WTw9tH2spmQ6nZEFLe0d9wjhUbNmWizSU1KYq4KBgacNqNDZrJ4a8wSx64D
3/2ch07ubZZMXTwX7UPXbSSfxWMpqG7NkqBVVVgyotBeux30h0XFBlWFmG+JnfdL
sRDlh1e+k9nYN7A=
-----END CERTIFICATE-----

```

## Intermediate Certificate (SSLCertificateChainFile)

```
-----BEGIN CERTIFICATE-----
MIIDBzCCAe+gAwIBAgIJAJcSQFi90ZmwMA0GCSqGSIb3DQEBBQUAMBoxGDAWBgNV
BAMMD3d3dy5leGFtcGxlLmNvbTAeFw0xOTA0MjYxMTU5MzdaFw0yOTA0MjMxMTU5
MzdaMBoxGDAWBgNVBAMMD3d3dy5leGFtcGxlLmNvbTCCASIwDQYJKoZIhvcNAQEB
BQADggEPADCCAQoCggEBAKxcoKxQl8ooblVWAm3QRLyp+uMImF+weQuGBvxNzsAm
12u5/sfDm1eIyZ6sGbBx9UhtiNXtxwpDnyScEElV96yhwS2VvOeV20G2raqaGQH4
a0wuqcWpqeBAqpzy41NmBrPEI1dTFZVe8WB7pRaTr4SRQfVC3BB2vg44UusIIJFP
arMAyF6RPmEuhxfOoUmZZf41eqC5JlGl90cRU3SJ1p5yVzb59fR+q+zGxH7BIePd
YyMCjgsyoPg4IDCSZQyoEQL+78+6Yt4i5+jgmeLWnc+euyrCjizLUfkNWbCnba66
nfvDq2Yny3kVctIOAvTxgxEQeRTvIm2aEKf+6BK0zPsCAwEAAaNQME4wHQYDVR0O
BBYEFJx5b5vLJnRlXFaerQiyHDor4JWPMB8GA1UdIwQYMBaAFJx5b5vLJnRlXFae
rQiyHDor4JWPMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADggEBAKg2FdRf
Q7TOO0rbD4lZbIEFrOYUL8/1uOIFTtS3+jjvWpkHWuuzlDQuGeDyhOPCZbULHlcc
R5Wcap5W0MQfdzBTMoyEMQFBZdWQJ0hBhjeBGONYYrVmQjQdKMRaEkfVEddtROq0
P9rslcv2o1f1I9f31X9mUuZfwLb/wkPV+/blBbnIBEbeoiNGzR2e4d+WhHGvbXYV
xrEB3WTw9tH2spmQ6nZEFLe0d9wjhUbNmWizSU1KYq4KBgacNqNDZrJ4a8wSx64D
3/2ch07ubZZMXTwX7UPXbSSfxWMpqG7NkqBVVVgyotBeux30h0XFBlWFmG+JnfdL
CCsGAQUFBwIBFiVodHRwczovL2NlcnRzLmdvZGFkZHkuY29tL3JlcG9zaXRvcnkv
MA0GCSqGSIb3DQEBCwUAA4IBAQAIfmyTEMg4uJapkEv/oV9PBO9sPpyIBslQj6Zz
91cxG7685C/b+LrTW+C05+Z5Yg4MotdqY3MxtfWoSKQ7CC2iXZDXtHwlTxFWMMS2
RJ17LJ3lXubvDGGqv+QqG+6EnriDfcFDzkSnE3ANkR/0yBOtg2DZ2HKocyQetawi
DsoXiWJYRBuriSUBAA/NxBti21G00w9RKpv0vHP8ds42pM3Z2Czqrpv1KrKQ0U11
GIo/ikGQI31bS/6kA1ibRrLDYGCD+H1QQc7CoZDDu+8CL9IVVO5EFdkKrqeKM+2x
LXY2JtwE65/3YR8V3Idv7kaWKK2hJn0KCacuBKONvPi8BDAB
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIEfTCCA2WgAwIBAgIDG+cVMA0GCSqGSIb3DQEBCwUAMGMxCzAJBgNVBAYTAlVT
MSEwHwYDVQQKExhUaGUgR28gRGFkZHkgR3JvdXAsIEluYy4xMTAvBgNVBAsTKEdv
IERhZGR5IENsYXNzIDIgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwHhcNMTQwMTAx
MDcwMDAwWhcNMzEwNTMwMDcwMDAwWjCBgzELMAkGA1UEBhMCVVMxEDAOBgNVBAgT
B0FyaXpvbmExEzARBgNVBAcTClNjb3R0c2RhbGUxGjAYBgNVBAoTEUdvRGFkZHku
Y29tLCBJbmMuMTEwLwYDVQQDEyhHbyBEYWRkeSBSb290IENlcnRpZmljYXRlIEF1
dGhvcml0eSAtIEcyMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAv3Fi
CPH6WTT3G8kYo/eASVjpIoMTpsUgQwE7hPHmhUmfJ+r2hBtOoLTbcJjHMgGxBT4H
Tu70+k8vWTAi56sZVmvigAf88xZ1gDlRe+X5NbZ0TqmNghPktj+pA4P6or6KFWp/
12u5/sfDm1eIyZ6sGbBx9UhtiNXtxwpDnyScEElV96yhwS2VvOeV20G2raqaGQH4
a0wuqcWpqeBAqpzy41NmBrPEI1dTFZVe8WB7pRaTr4SRQfVC3BB2vg44UusIIJFP
arMAyF6RPmEuhxfOoUmZZf41eqC5JlGl90cRU3SJ1p5yVzb59fR+q+zGxH7BIePd
YyMCjgsyoPg4IDCSZQyoEQL+78+6Yt4i5+jgmeLWnc+euyrCjizLUfkNWbCnba66
nfvDq2Yny3kVctIOAvTxgxEQeRTvIm2aEKf+6BK0zPsCAwEAAaNQME4wHQYDVR0O
BBYEFJx5b5vLJnRlXFaerQiyHDor4JWPMB8GA1UdIwQYMBaAFJx5b5vLJnRlXFae
rQiyHDor4JWPMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADggEBAKg2FdRf
Q7TOO0rbD4lZbIEFrOYUL8/1uOIFTtS3+jjvWpkHWuuzlDQuGeDyhOPCZbULHlcc
R5Wcap5W0MQfdzBTMoyEMQFBZdWQJ0hBhjeBGONYYrVmQjQdKMRaEkfVEddtROq0
P9rslcv2o1f1I9f31X9mUuZfwLb/wkPV+/blBbnIBEbeoiNGzR2e4d+WhHGvbXYV
H2xwxbhuvk679r6XUOEwf7ooXGKUwuN+M/f7QnaF25UcjCJYdQkMiGVnOQoWCcWg
OJekxSOTP7QYpgEGRJHjp2kntFolfzq3Ms3dhP8qOCkzpN1nsoX+oYggHFCJyNwq
9kIDN0zmiN/VryTyscPfzLXs4Jlet0lUIDyUGAzHHFIYSaRt4bNYC8nY7NmuHDKO
KHAN4v6mF56ED71XcLNa6R+ghlO773z/aQvgSMO3kwvIClTErF0UZzdsyqUvMQg3
qm5vjLyb4lddJIGvl5echK1srDdMZvNhkREg5L4wn3qkKQmw4TRfZHcYQFHfjDCm
rw==
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
12u5/sfDm1eIyZ6sGbBx9UhtiNXtxwpDnyScEElV96yhwS2VvOeV20G2raqaGQH4
a0wuqcWpqeBAqpzy41NmBrPEI1dTFZVe8WB7pRaTr4SRQfVC3BB2vg44UusIIJFP
arMAyF6RPmEuhxfOoUmZZf41eqC5JlGl90cRU3SJ1p5yVzb59fR+q+zGxH7BIePd
YyMCjgsyoPg4IDCSZQyoEQL+78+6Yt4i5+jgmeLWnc+euyrCjizLUfkNWbCnba66
nfvDq2Yny3kVctIOAvTxgxEQeRTvIm2aEKf+6BK0zPsCAwEAAaNQME4wHQYDVR0O
BBYEFJx5b5vLJnRlXFaerQiyHDor4JWPMB8GA1UdIwQYMBaAFJx5b5vLJnRlXFae
rQiyHDor4JWPMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADggEBAKg2FdRf
Q7TOO0rbD4lZbIEFrOYUL8/1uOIFTtS3+jjvWpkHWuuzlDQuGeDyhOPCZbULHlcc
R5Wcap5W0MQfdzBTMoyEMQFBZdWQJ0hBhjeBGONYYrVmQjQdKMRaEkfVEddtROq0
P9rslcv2o1f1I9f31X9mUuZfwLb/wkPV+/blBbnIBEbeoiNGzR2e4d+WhHGvbXYV
YXRpb24gQXV0aG9yaXR5ggEAMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQAD
ggEBADJL87LKPpH8EsahB4yOd6AzBhRckB4Y9wimPQoZ+YeAEW5p5JYXMP80kWNy
OO7MHAGjHZQopDH2esRU1/blMVgDoszOYtuURXO1v0XJJLXVggKtI3lpjbi2Tc7P
TMozI+gciKqdi0FuFskg5YmezTvacPd+mSYgFFQlq25zheabIZ0KbIIOqPjCDPoQ
HmyW74cNxA9hi63ugyuV+I6ShHI56yDqg+2DzZduCLzrTia2cyvk0/ZM/iZx4mER
dEr/VxqHD3VILs9RaRegAhJhldXRQLIQTO7ErBBDpqWeCtWVYpoNz4iCxTIM5Cuf
ReYNnyicsbkqWletNw+vHX/bvZ8=
-----END CERTIFICATE-----
```


### Change/Remove the passphrase

```bash
openssl rsa -des3 -in myserver.key -out server.key.new
mv server.key.new myserver.key
```

### Apache Conf file

```apache
# domain: example.com
# public: /var/www/example.com/public_html/
# logs: /var/www/example.com/logs/

<VirtualHost *:443>

  # Admin email, Server Name (domain name), and any aliases
  ServerAdmin webmaster@example.com
  ServerName example.com
  #ServerAlias www.example.com

  SSLEngine on
  SSLCertificateFile /etc/apache2/cert/example.com.crt
  SSLCertificateKeyFile /etc/apache2/cert/example.com.key
  SSLCertificateChainFile /etc/apache2/cert/example.com.chainfile.crt
  <IfVersion >= 2.4.8 >
    SSLCACertificateFile /etc/apache2/cert/example.com.chainfile.crt
  </IfVersion>

  # Index file and Document Root (where the public files are located)
  DirectoryIndex index.php index.html
  DocumentRoot /var/www/example.com/public_html

  # Allow .htaccess and Rewrites
  <Directory /var/www/example.com/public_html>
    Options FollowSymLinks
    AllowOverride All
  </Directory>

  # Log file locations
  LogLevel warn
  ErrorLog /var/www/example.com/logs/error.log
  CustomLog /var/www/example.com/logs/access.log combined

  # Custom php.ini path
  # PHPINIDir /var/www/example.com/public_html/
</VirtualHost>

<VirtualHost *:80>
  ServerName example.com

  # Redirect all HTTP to HTTPS
  Redirect permanent / https://example.com/
</VirtualHost>
```


Links
---

- [How To Install an SSL Certificate from a Commercial Certificate Authority](https://www.digitalocean.com/community/tutorials/how-to-install-an-ssl-certificate-from-a-commercial-certificate-authority)