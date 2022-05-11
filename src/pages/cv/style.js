import styled, { css } from 'styled-components'


export const menuIcons = {
    about : {
        dark : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADDUlEQVRoge2YT0gUURzHv783KxXkJSKhWqpLpY6zmLsYaRAUgZcOgtcoPFh0i67RpYIO0ilEqWMHCwkiCukiaZG4KI7riqck1EOXLkIRO+/Xwf7srjs7897MuIPu5zbv/X7v9/vy3nfe7gA7BIpi0eZU+iMxzrlMT+Xt7Pmwa4qwFwSAKiIAoDuKmpEIqQWRCxGSuog49KO0pU7UBdiQgpkj8WIxiagLMNNkRO+UEuoeiRsle97Slu4B4SmAwzXqxxcEXgNx/+L87PjfMVEWMYSYiwAABh0Bi6HisfKjdSzA+m8TMJJ5O+vp7LydpQSMJIB3usUYOFH8HJpHEjAGbHt69c/jlHskTQKAbU+vCkkDYdUv9YiVZt2F/OxEJcKqGdqOWFbnUdUc08wkw6ofmpACnBGVxkwzk5SCR8KqH+bN3iMFf22x0r6CJbRPVEV2zIW464UUABokQe3k/GiUv8RBYtwmwAm1OwX0PMJ0Lb8w87xoZAPA41Pt7aPCMa4TcD+U7hRQ3hEClstE/GN5bm59yc4+YMKn4K2poSyEmee9YgjI6bWjj/rRItrrGcLY5/ZyFZK6crkZpR1rTXV0b/5Bc0fD7NzsGQGcdJ0zpM4p8Pz5o2F28tEIN7n9vWWmSb+XpgrqO8L44BVCoGmtbgKgLoRwyTQ7m9ymTTOTZOBCoK400LlHkpKchwD6K006gh8R4Co0RmYHQLhqpjoulw+3WJmLBPRVS42R2TfzJNMYgMaykq+81oyP2f/T4HNsWwgiZLzC2PsA6wVC+WgxYAumJ4unjz+DnS2ZO3Rgf++37xv9xLjFQFul/KjM7lcIAxhjyMEle/YzAGBhZkvQxMREAcAwgOFm68xZgrgDoBdFt6O+2av73c9XlJ+CZF9ufvaNagMA0GqlrzDwAsAenfxqKH5Fobu6IgBg0c6+JuZ7uvl+8RTCRuFl0CKO0TAadA0vPD1CjrES+L0vC8HyfbDrPz7EjrqQuFEmhFdq04Y6BHwpfhalk+ImgPVt7UgDAq8R8Y1a91GnTp0a8BukDO7Nrl0OgQAAAABJRU5ErkJggg==", 
        light: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEdUlEQVRoge2ZTUxcVRSAv3MZMFAMG00QFlZDkBmGQZg3rVK1SSOLLjCNSbtsRE1Mozs3beJfqwu3NsZudIFbjKm1izbtQtvSicCUn2FgWml1QVs1LtrYMMgw77hgBmFgfl55rxDCl0zmvXfPOz/v3HPfu/fCFkG8UOpvtwZE6SrQfGVyfPhlt20atxUCFAkC4CUvbPq8UJpjcnx4RcYDIUu9suVJRjYCzwPxt1sDgZB12Ws7ngciig3iWZfK4WmNAHgxQq3FlqmRFRkJtFn7Eb4GGrw0ut7RS9DbiL6VGLt2PnfN5EmcwuMg3ECRRtScWn4tv0aehtXjfykCIesuUG+r6UrGB6O5J17oyU+OD0swGOmyjQ4Af0yODz/l0J4qPLP8mls1Ug+QjA9Gs+dXCovKZYCJiaGry+9dL26NWneAhmAw0jUxMXS1nJGq9Xlrj9rZ/u4C7gSi8i2iR22jA4GQVd4tdvYf6XPDBVcCEXv2YzU1IHqYMgcLQW8r0ieZ1HE3fHAlkEQiMQ8cy/42hK35QiyXpo6OJ6sWzHsqckAWh8EMyvdVFQvvj46O3nPZx7JwHIg/ZAVNRs+pSOOKl43w5rztey3QHj67QNUHN8airoxG5eK4awn0KdIInLHVtqordYextUnRs8ATqLzh0/TFcDhc6b67hXGUkdbWXe2K3Ylydz5179D09PS/2aabQM9zHR0NFZmKi4B/bkH3AecLa3MXZxmpsJsAVIguC2KJ6yMjd1AuAShmpyselomjjNgq90UUozxWSEaEGgXEllWBAmRni04XIEquvDjKiA9uAajgLySj0LYok7npRHdxSs8wHWVElfrsSlhdQZPQqICPhetrtXs1Y3SUkYyxAwCInisopAwCZKh6ZT2OOcVRIKr8Aigqh1pDnfvy21tDkR4V9gOQMb+642J5OOpayXgs7m+LfCaiHyrmBPATkP2ORUCPAUZUjyYSg2Nr6dgUxQ5QU2V/DvwJ7Am0W0vTzUDI+krhRZC/7tdWnXSqtzguFztALBabDQYjr9tGB1AOA+9km3oBbJUDM9FoqtD9m6LYc9x73DeSPVw1t5/7p2Yk/9qjwGkg0tIW2Vs3m/4he770YSiL01121D0409IW2YtHWxaFKKtrhcPhmlSat0HeBW3WxR77t6r05mQyKr1G9DtVuo1odyBk3UD0y2of38Risdmc3IYVeyAU3p1KkwD5AmgGZlA9Yc+blqn40KWcXDI+9LM9b1qA48AM0IzKybm0TLS2W7scOp5H6WJfc/8it64VDHb6bWMGgVrgmqp+OtXy7I/092eKaj14sMKfvNUjIh8BHcCDCtVIPB5LPmQkK8j3E0pkxBb5BKgV4UJ1pb4wFY+dLhkEQH9/ZioeO11dqbtFuADUZnV5RvEaEdMNiirdqbTMl7vUkyOV/v9Y4dWHcbBcStSIJtwzJZPu6VpN0Yw8qr0NN9gyy0HbgWw28mpEfwfZ6eV+uFsI/Lb83KxsNEfcWub3mBnEPrLRTmyzzTYbwH9ne5lGFdfVlwAAAABJRU5ErkJggg==" 
    }, 
    exp : { 
        dark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABy0lEQVRoge2Xv04UURSHv3NndiMmFP6BZQfXGAsLhiwkQgzBB9CHQDora0ULJRofwWbL9RmIlZViYrQwhC2hUNnQWJkQYmbvsZDCaLMwc3fuTu7Xn3N+3+TMTQ4EAk6QIpqkaVonnnihljWE5pBlfVS6Yo+e9Xq9X3kzxHkbANj4/HNRfXjKz5IguqHROQWe5M1QiIiorgEYK6u7u58+DFOTLi6tquU9yDoFiJi8DU5IAIaVAOh9+bz9d21eihIpncqIyBlfHF/oq8hrkx09jS4n116iPEKYLDvVGZgUuI3Ua0as3is7TX503YzhOv2P0KzMzx5EfCOI+EYQ8Y0g4htORUTZyqR2JSZqAW+czpprL6mr5jFRa2fn43eA+fnlljX61dWsyqxWDPQp6Nz8l4xBp92+dd9aK9Zox8UMAEEPDCpdVwOAuxmDbycrdcfVEIVudCm5uidWjxGuw3gdV4IeAK+sqXVIF25ulB0oL3Pt5cfRVGP27fRMM7uYzOz/ODz8WXao03BjYWW20Wg+AN10+vyOkso8v0HEN4KIbwQR3wgivhFEfCOI+Ibhz6k71ozi1B0JCt1oeurCO6ReG+dTVwbHm2VnCVSW300xeWqp3LMTAAAAAElFTkSuQmCC", 
        light: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABmElEQVRoge2ZTUrDUBRGz21jUaEDQQWrgjizQSlYR3UHrqE46xK0OBEVdQMO7NRNuAB/JnYg1XQD2uIKFARznbShE6E2SfMa3pm/d7+T5N7wErBYYkGi2MR13RzOzJn6VBGWhlzWReVG/M9jz/O+w2Zwwm4A4Duzp6J68M/LUkC0rtlpBY7CZohERFSrABlfKq+vT4/DrHFL5Yr63IPsE4FIJuwGPQoAw0oAeM/Nh8G1YYlKJHFSIyIjThxTCCZfdr6wdo5yiJBPOtUI5BF2yTiOM8rEMYXBySfFrbICtFvNSF6O46afPzXNbkVMw4qYhhUxDStiGpEcrP5io7S9l/FpKKIotfZL8zauWrHeEfHlWpFlYAWhEWet1Dxa8YooNeAdeBOkFmepWHuk1xOrcdboE9wRt1SujKNglAxmDs4jk85gj3wklmJ0gsxBj7RbzUn78ADYE6K5WBHTsCKmYUVMw4qYhhUxjVSJdGGyD1aCdqS4uXOJaD3pUCG5yC4uzN0huSmEdZis/4iCdkCu5OfrJOksltTyC2zMa7UyUQCvAAAAAElFTkSuQmCC"
    },
    form : { 
        dark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADoElEQVRoge2YTWhcVRTHf+fNJCYxSYlipDSL+hHnK5mKbxKJLXRRhCBiCrabgi3tThGkiii6EnEhtrULdaGV4mfpQuhCEHcTSJCQeaV5yZt+ZECMX/1YpSGRmcy84yKpBjFhZu4bHIf5w1u8++455/+/5557370S25WaFOUJ/t+YsBpABMAe679mEBSaQuoNTSH1hqaQekO43I5ZNyO1JLIZ4smUltOvYTIi5SqudzRMRhpGSLPY6w3NYq83NIyQZrHXG2pf7MpthDDQUcswtcpIUeA9DZV2Zmcz27JuplNRG/imRvECzUgROKMq50JqXZ2bm7oBYNt2x+LiYimXy+UBEonHHiZkxRWOAWMBxQ5GiMAiok97M87EnbaBgcfv963SWWAUKKB83Htv58vpdLp4p098cOgoomcIYGYEkxGR57Iz01/GbHu7FOQdRPeAtQ209x89rygUEPmuRfNvu667nEjapxV5yZRC2cvvZhC41Rb2z/eNjLTLcmEcoR8E+NfxiQqAarJIawwYo6QfEDIXYpxSFX3XcZzVruXVMZD+CkyfiSSHH/C8izkCWATMhIh+lZ1xTvaNjLQLHKjUPKz+foD2Fj0MXDKhYiJEpcgbAN0rhU+AZyt3wKlYcugFx3FWVPUtAy5GQuY9z1mI2fZ2VA5V60TQNwGWOlu/N+BiIkQFQIrWPaxVd1UQ6AH4pa+vwCYrRDkwECI7IpHdXb09d18FFqr1orpW6PFrPyYxGBCTqdVhteX3p9PpoiofVunjuvh/PA+Az4sGXAxXLaUVQCBajbnAfZ7nrXDwYAjhqAkV032ka53SjWqMVbkJ+I/Oz3dhMK3AWIjuA7CUjwRuVWIpUFLhdYC8Hx4142EoRJCnYgOpJ+fmpn+mpCmB04BfhuEFLPZedjOfr7e8YsIDzKeWJZacB/A8Z8FzM8cVLmxtIjcLbaEj3qXM5F8tkDLkEcTBSns2vuVb9JjCOWAZuA5yErgIrAr8gOhobmrqdnRwaK957L9h/Pe7EYmkfcRznM+ALXf66K7hRyz1vwZ2BBU7DEwCu4NwpsjZRDK1D0tOef07ZyPubx2huwrDUvLnvfiDv0av/fSQpf4BfP81hO4gYq5jItArnkoPaUFeMTXMdVBTSL2hKaRMLIG8uvawVMtANROi6LdS0oGsO30i606f0BaNCHyBweFpKwS6IQqMK3T7KsevzGbGN3677Di/A4ejg0OfWqLvE3CG/gTqDTk85+HKsQAAAABJRU5ErkJggg==", 
        light: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADdUlEQVRoge2ZQWhcVRSGv3Pfm7ZJTVAEhSoSF7bNm7xJamZiRyIZIRuhiqsKIiIu3LgQrG5EFBWE0lQXIrgRiu5chyqt1lRLxc4MGV/GaQvdiKJQrLVJmkUm7x4XmYFYJB0z95lpnH91333n3P/8nHvuffc+CTLZU8Cj3No4Y7j1RQCM+81WLSrJZkayUQSZrAKYzQ7EFbpCOg1dIZ2GLSPEv7nJKprL3H+NVreF/19GOn3D3DIZ2TJCusXeaegWe6dhywjpFnunoVvsnYbEhdybz/ek0+ltSfMkJmRgoLBjMJM71n+9vqhez7XBcPT1pLjgX9RIK9izb98uP/bfUjSERQHGgDqwXUTeCTLZiYbpOZ/ld6Mouu6K25mQQqHgX76ycFJFgzXdv8dePJxSb7e1fAVMNvon62y7H3jaFb+zqXX5j/k8IoFCpBCiPBljxi7Ozv5arZRmjDUPGbGPi2EcWDBwcGCgsMMVv7OMqJq8CIhSrs2VqkB17ftq9Vyp2Q7C0Z9VJNjZP/8wcMoFv5OMBJnRIyIcXh1Rf2yBdbbRODE4nHvKRQxtC9k9nL8H5BCwDDJZ+6F89GY+d93R9xyiryh4onqk3RjAgRBPbC8gwNWelP2mFZ+ZmZkVE+vx1SfZ3m4M4EDI+cr3l4CvgbuXVuT9VnyGhsay1phi47EzMgKoivkAwChDLTkY+wCwU4Wztag45SAGN8Uu1o4DKDLdin3KrHwOYJS0C35wJcTIEoCgB4Iw+9h6+8Ng5sH9deu/BqBwzQU/OBJSx/8I+EVhAuF4b//iZ/9klw5zLwjmO4VXAUTlTRf8ANI8+bV73hgZGbl92fpXAQRisTZUj/vUyvMq5rSJlz5Rr/ck6P6mj4szjvNfb5VK5c9mW8GzxtRUzReIHBT0Q/V6FhoiqusMs2Ek8xkvegxlXpAy6EsqnAUWgS9jzBOJULq4VGhOkVan6Y12LmIwwJl2B9l8yLd+LSo9stlhuCj67uVDp8Hpmf1G7A1zE0b0PQCr8vKFueLppLicXro1Vx9N6S5Tl8MKz6zlUHTaxLyonvwEbi/9EsmI1OWiQh+wAPL2aq++IcgB9ZhY13mDSKpG+hSdlliHalFxqhYVpzSlewQ+BW5LgtBpRlQ5YUTujJVDF+ZKf6uH8+Xyb8Cze8Pcx55w1Kpeccn9F88CMv+XKq16AAAAAElFTkSuQmCC"
    }, 
    dld: {
        dark: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEBklEQVRoge2a3U8cVRjGf++ZBYqaqA0IaUikllr2k113KZDGSElsTKppSawGkxovTPoXNNFbr9QrjVf1qokaNWvihU0gWpQLU4KAfO0CbTDpBcWiNWkwVQM783oBNiiwy87OsBD5XW32vOc8z5PJnMm8Z2CfffbJh+yESGdnZ+D2b0stYkwIlYNG1XbQeUut+Uzw8THSabtUDV+DhOOpEzhcUOgGHtqi7A6iVxzH+nB26odBt1q+BGmOtzeKs/KBIM8XZUb1S1EuZjKjPxWr6XmQYDR51ohcVnjY5RJ3BenJTg73FTPJcim2KcFY6lUj8olCdQnLHBDoqak7dPPO4sLEdid5dkXCLcmTqvI1EPBoyRVjOJUZHxnYTnFRQZLJ5AP3ljUoWI9aat/KBI/cIJ224/H4I8tOYBaoc2V5axYrTa55fHz8bqHCbQUJxtuOGsd+S+EscGDd0ILCe6IcQbjg1m0+VOSdmYnhNwrVFQwSiqbOIHzM1tunrwj8KY51OJMZWsxXZ/INNkePdyB8TplCAChUO1auu1BdviDGEucSUOWdLZeonClUsmWQcEvyGYWot45cc7xQwZZB1KHTWy8lcbChoyPvs2ljkHPnrHA0+YqInPfNlgsevGfX5xv/164VjLcdFcf+CGjz1ZULFL0iwkCOys9uTAze+u/4/SDN0aeSRkwfULOjDosnJ8jlCrNycf2DUgDC4dZ6tXQUOFQ2e0WjN8XWZ7PZH+dg7R5R47zPngoBII1qme+aEolaANMcTUYReanctlzSUJUzlwCMQV4rt5tSUJHucLy11SC76nnhCrX1vAGe8FPEOHJCRJ/2UwOhK0Bpb3MFyWSGrwGEYinfNAQaDPCLbwo7hELAANfLbaR0dMGAflVuGyWj8r1ZtpxPUZbK7aUUFL4wc2NjvyLydrnNuEVgcGZqpNcATB9rfBcoqiG2K1CWsKzXAV19H0mn7eVq62Wgt6zGiuN3VV7Mjg1Nw7oXq7mhoaXpY4dfENE3d/s9IzAoltU+kxn5Zt1/G3kymawJ5OhBzWnQEKuNt0o3otOTIwIQiqXUzfw1/gDmEb2mjqRnpkZ6gVLWK55QLKUlhtgWeftae4n9ILsNr44AAAjFUkOIVknOPJfNDt/erCYcbq3XgNOHyl/TkyPtXml7e0VEq1BpUeP0RyJtG44YIpG2OjVOPyoteNyK9TRIQFdOARlEQo6xB8Lh1vtNtaZEotYx9lVEQgLXbcs+7aW252eIkUhbnSO5bxEJARkgsja0+lt12migq9AxQbH4cqobi8Ues6m8ukkTfFYrtGtmdPRnrzV9O2dvSiRqq2yrf10Y30KAzx8MrAtTIbac3Gon2xM0JRK1/3QD9/k/8TdRzEXNyPUWCQAAAABJRU5ErkJggg==", 
        light: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAF+0lEQVRoge2ZbWxbVxnHf8+5ttukkIkh2tIxtnZVm/gmN8mu3XQdg6QT09RVYmyrYKgMNu1LJQQCgdgQCAkB0+ADmgRjAiFgGlpRxKpNQ2UUdeytIbXdpI6vk0AZE6tG1hU2ZbTNi+95+JCkZGnjt9pNJ+X3xUf3POf8n7/P8b33PIZlllmmGHIxRLq7uyNj/x5vN8ZpQe3lomItetxR53iu5aoBenvDC9Woq5G453cpZo+gtwPvWSTsJKJPW+v8bGTocF+1WnUx0uL7H5SCeQjVO+ZpjCgMCPIGokasXqGwGZH42WRU94nytVwu8/dKNWtupLUj0W0te4E1IG+q8mNH+Xkul3r1fPGue+1GdcxulC8jNAFvCXJnkE39oRLdmhppbfdvsipPAisF9jpMfSmbzZ4oZ+zGzs4PREPnIYE7BUIL9wxn04+Wq10zI25nV1zD8DCwCuQb+WzqgSqmkbiXvA/0e8C0iN4YHM28WNbASlR832+cnHTiagpNhPwzCI4cm70ePTMtA4ArIt8Njqa+VbmH/xP3/O+D3A+8HjOF5sHBwbdKjSnLSFtbckNo7HdE5TaFhnldw6h+W0WuEPgR8Hw+m+4BbHUWzmLiXvIA6HYVeXD4aOq+UgNKGnG95M2q+luEJoFQYQh4E3Q9yNWzYQqosbY1lzsyfIEmZnQ7kh1qNSMwKdZZn8v1v14s3pScDP0dQhOiv7JRvTKfTXfms+nt+WxmvVWzDRgERFSfrJUJgGAwNYjwlEKDdQqfLBVf1IhV/QnQKMIP8kczdw9nMv+a3z8ydLivIarXI7pHNLLnAnM/B4UnZhryiVKxkcU64u2JTpRtCMdWRvSbi8VlMpnTwCPVJFqKqE49UyAGsKVU7KIrosrHAATZm8lkpmuXXvlks9kTAmeAyz903XUNxWLPayTuXXuDQXYDWNW/1SHHShgDWHUqXFss6B1bq7W1a411wkdQblUU4KQJ7aH65VgahRUAjtovtHT4B830xIEgCKYWxp1dkeb2LZusKfwF5VaBf6hw1/iq6IfnHnpLyH8AEL4iVp5Wp/FVt83/uu/70flBAtDcvOX9Jmb7gWsUnjDhmc8FQfDfi5/zuWzs6mpaMRm2EepVatiByi4ghpKKyNTOuXc5AXC9xKMKn1Xlj40x3blUP+5yaGtLbgiF34BuBYanGpytx/r7x43b2RVX2I0ybiPh3ZeyCYChodTLp8dX9QDPAy2xicLDAEZDew8gIvrL0YGB15Y0yzJ55ZU/T0gonwLeRuUzbkeyw4D2AIRq9i1xfhURBKkxFXkYEKz9vAE2ADg2MlQPwbiXeK7FS6TqMbeo3QegyI0RZl/LJyffOFUPMeCj9apwxEw4OmUjCFxpgBMAK1e+b3Wd9OqGtXYaQCFigFGA0GHbkmZVBdPE1s+09DWD6FMzbbt7CXOqCqN6CwDCS6YQ4XGUcUF2tnYkupc4t7Lxfb9RRb4IoFZ6zV8zmZNi9AEAa3m8uWPr1cWnuDSYmJafAusE+oaH0vsNQLBpww+B/cBaYwt9brvfs6RZFsH3/UbXS/xa4S6UcRznXkDP3hk3b77+vc6Kyb3ADgBRfm+Fx0yoh2Bi7HyvzuUQ9xIKkM+mq74L+77feGqKaxzYMbud1gFvq+X24Vz6ACysouza5bgjL38VkfsVLqtQ78V8Nn3DwovFjMS9xAvARyrUQaAPx7k3GOjPz11755m9tzcM4MFNvv+L6JR8WkV2gsaBNTBzeC4yvVaaUAWcBo4jekit9OaH0vuZKUFdPOJeQudWpZ4ULQe9m1g2cqmxaIGuGuJe4giiRgrm5iBIjZ0vxnWTa62jzwhM5LPprlpp13RFFBxU2tXRZ103eU4dynWTa9XRZwU8St4FK6OmRqJMfRwIgGZ19LnNnZ3r5vpaW7vWqKN/ApoFRkMnvKWW2jU/88x960AzMDL7ybz2iITSs9jWq5a6HN48z1tdIHYQcBeIjRaccHs9ihx1+599oZl6mpidv37MbrODABLK9lpvp4uK53mrPc9719UDlrlQ/gf9v1tb5qydggAAAABJRU5ErkJggg==" 
    }
}


export const CVArticle = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column; 
`

export const CVH3 = styled.h3`
    color: white;
    text-align: right;
    position: relative;
    border-bottom: 5px solid var(--bg-color-secondary);
    margin-left: 20px;
    margin-bottom: 50px;
    &#about-section-title::before {
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC/0lEQVRoge2Yv2tTURTHv+e+FOtQpCAU1CAugoODm9gKxealzeJQ6CpKqU0qLuIqOqjgUBykP9Lq6FClCCKm+VEJpoqOiouTRdriH+BQ4eV9HWwlSZu89+57rwltPtu799xzzjfnndzkAPsECcPpjDn4QYgLdbZXkoXsxaBjqqAdAkADEQDQF0bMUIQ0g9CFKJu9Agn8VdoRJ+wAVEqVyVB6sZJI2AEIllToMto90npUFX3uUjxRVvJUgGPNSsgdXCfUaKqwlN1eqaoIlcy0vggAkOMCzlSuVAsBTuo751vDUtFkIevY2slCVgxLRSnI6MfDqcqHwHrEsIzxsWJmbetxpYFpCQDGipk1WzgeVPyqT282NkhdR24qsRtBxQysIvP9iRNez0zF49Gg4gcmxOqw57wkNhWPRw1b5oKKH9jNLkTCoPycjQ26O2AHFfkf++ZCPPBCLBKTSuxzZetPl0XrKMFbAMpBJucFrR4heTW1nHtesfQbwOMnprkQoVwTyP1g0nOPTkW+14j4z818fiNVyD2g4KPPvDyjI+SLk4FQvmn49YXnV0uATmcbHq53XSubvdff5TxVLB0b6iNYamTjuSIEzriwOV13TynPMd38VdZpdudEiJ56EzOCJdeXpgd0euS9o4Xgs4ZfX+gIic0PDPTU29z6vdWvn5IeOq9W1JbIQwCju20atjwCUFdoyzQ7ABC4kjbNeO36rDk0AGCk4dkWanYAiJBqEUBX1Sr5yslnKzX7Nh0u1/YEbSECZHcsUvK+svGBzs3+FeBUd/eRZ7V7v8qbwz1G56iIfQOQs7udD6vZ3QohRBZtyuREIfOpntG9YtECkAaQno4lzhuwbxMYRsWQQ7fZnebHbqYomyRHUsu5N14TAIBpc+iyIl8AOKRzvhEepyi8oysCACbyS68huKt73i2OQiw78tJvEBqy4NeHE449ElHlVd/f+5b2DM41B3740HK0hbQa1UKI1SblocOPyofaiqQIbOxhMppwXcRONjuLNm3aNIG/Jez4G9el55QAAAAASUVORK5CYII=");
    }
    &#exp-section-title::before {
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAB0klEQVRoge2ZP08UURRHz30zS4cCVvxr/AbGEgsjC0Jiix27lSiFLaCFosaPYGDXbuik1ZCwCTFB/SDqbglIQchkmEuxmhgTk11nnvN28k5/7/2dmTcv8/LA47GC5NHk3dLS0PHJ6StVloHxXmoUOiDRtdHh5/d3d+OsGcKsDQCOjk9fAmv91AhMgG4cnfxQ4GnWDLmIKCwLYFKdWTnY/9JLzdbc3Iyo+aQqdXIQMVkbwK+nC71KAKy2Wp9/r81KLiIuUBoR+ZcdxxUUOgI7Y6NXngWzE9OvgXVguOhg/SLdzLfOzuOKAWpFB8qKoHXDgC2nvzBemo/di7iGF3ENL+IaXsQ1bIt80LQyFSRmWoU9m4OsigSJebR68L794OPe91T0oc1ZpVla4c9/+lyOm3+SVNLm29uLK/HQhQSpNG3M6KJtAxLZai/K4kWYfgtS+Qos2JqDEIWENDQRQGu23ow9tI0QaWCaNKrzG0XHycr27MKTUJEXjeo8sWj0uNXqFB2qH7bu3JsUSWqIbsp29a4WHSgPSrP9ehHX8CKu4UVcw4u4hhdxDS/iGqZ7cT/oWD7q/jeEKKjfvHF4dh5XgOsycPeI2kZ4MzZydbPoJJ7ScgmXLYJ8CJ011gAAAABJRU5ErkJggg==");
    }
    &#form-section-title::before {
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADoUlEQVRoge2YXWhbZRjHf89JLTTatRGqjO1C8WvK2I1DmBtskLanG24d2N0IdmygyZxMpoiiNxHxQtzqQKdJuzH8HBOEwYTsJGfQQotXG4I3ju2qY7NbsHOtqWt6znm86KpTsKZ5TzSG/CGQnLzv8/x/53k/eF/5uMseE+VJ/t8ateoAAmCD9V87CEsNkFpTA6TW1ACpNTWV2zDpOlJNI3+ndKet5bSrm4pIucS1rrqpSN2ANCZ7rakx2WtNdQPSmOy1pn9jsk8xX/loNZNUqyIe6HteELkv6TptCde5SwIeF/i6SvnKnyNlyAOOYOnxiO+ff+7MmasAma1box94nr8vmz0H9B227QclkMcs1d1Ab1jJwxpaNwR5KuGeHl14MBSP3+tZTcdE6QFKIIMT3s2XU8PD3kKbdKe9CzhCCCMjHBCRZ5P5059nbHu5+rwDbADagHv+0vIHgZJCNmrp2/25XDEdtw8hvGRqwXhoKRSsycKJgXU7WtSfGgEeWqT5qltvbc2vgTwK9PpNfBjxzUGMS2oJ7ybOnp1rid7oZXGIP0lh21B39/17HediGIuAIYh8kcg7BwfW7WixRPqW2tsL2A5AS3M/8J2JExMQFbw3AKJ3Tg8pPL3UAIIMpOM9LyROnZoR1bcMvBiBXEi47njGtpeDPlNpEBV9E6A40+YYeDECEQApcffC98qCaAxg5UpKQMUrqAnIiqPrt7Ve0dnzwHjFUXR+ov90/Zc1GLwQE5BoKTq7PTU87KlyuMIYE75f2jNvJHjRwIvZPiKBNAOIsKrCEB2FTZtmvuroiExen9pl4sVo+RXRVgBFrlYY4loqlQqKhUIrBsMKDEEU4gCBFXykUFhidx94HeBmpLnHxAeY7+xb0vHurr253CULfy1wCAjK6HdSJdiYdJ1PAUSsVwx9GINYiJwASLjueNJ19gMn/6HPtdId1s49+fzYH490raGPUA5Wsdt/CP5u4DhQBCZUOQicA+aAbxWrZ182OzXYtXljCLl/V5gHKzLx7p0JN/cJsOhOPxjf8rCv/pfAirByN4GMga4PI5iKHMt02nGRYKC9vf376Suz0blo6QlR70IsFrv882TxAbX8vkD91wSWhZHzlkZDveJZ6iEtzCumurkOaoDUmhogZWoa9NX5D9PVTFRNkG8Ef3XSzR1IurkDEuERgc8wODwtplA3REVHBFlmibX/+Xx25Pb/Eo7zI9A/2LX5aKDB+2i4FfoNdLs/JcVY4NYAAAAASUVORK5CYII=");
    }
    &::before {
        content: "";
        position: absolute;
        background-color: var(--bg-color-secondary);
        background-repeat: no-repeat;
        background-position: center;
        left: 0px;
        z-index: 99;
    }
    @media (max-width: 1023px){
        width: 85%;
        padding: 1% 2%;
        background-color: var(--color-error);
        &::before {
            height: 35px;
            width: 35px;
            background-size: 15px;
            top: -2px;
        }
    }
    @media (min-width: 1024px){
        background: linear-gradient(to right, var(--bg-color-primary) 45%, var(--color-error) 90%);
        width: 100%;
        padding: 1%;
        &::before {
            height: 50px;
            width: 50px;
            border-radius: 5px;
            background-size: 25px;
            top: 20px;
        }
    }
`

export const CVMenuImg = styled.img`
    width: 25px;
    height: 25px;
`

export const CVMenuUl = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0 auto 10%;
    width: 100%;
    padding: 1% 0;
    &:not(.fix) li:first-child {
        display: none;
    }
    &.fix {
        background-color: var(--bg-color-secondary);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
    }
    li {
        margin: 0 5px;
        background-color: var(--color-link);
        display: block;
        padding: 10px 10px 6px;
        border-radius: 50px;
        transform: scale(0.6);
        transition: all 250ms linear;
        cursor: pointer;
        &:hover {
            background-color: var(--color-valid);
            transform: scale(1);
        }
    }
`

export const CVSection = styled.section`
    margin-bottom: 10%;
    @media (min-width: 1024px){
        display: flex;
        flex-wrap: wrap;
    }
`

export const InfoPersDiv = styled.div`
    p {
        margin: 5px auto;
    }
    @media (max-width: 1023px){
        margin: 5% auto;
        width: 80%;
    }
    @media (min-width: 1024px) {
        margin: auto;
    }
`

export const scrollingRule = css`
    &.scrolling { margin-top: 100px; }
`