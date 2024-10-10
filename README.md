![pueo](https://github.com/grassfedreeve/pueo/blob/main/img/pueo_photo.jpg?raw=true)

# pueo
26-key, column-staggered, wireless, reversable, split keyboard made with [ergogen](https://github.com/ergogen/ergogen) and [KiCad](https://www.kicad.org/). Named after the [pueo](https://en.wikipedia.org/wiki/Pueo).

Highly inspired by the [TOTEM](https://github.com/GEIGEIGEIST/TOTEM) by [GEIST](https://github.com/GEIGEIGEIST/), the [zilpzalp](https://github.com/kilipan/zilpzalp), [the berylline](https://github.com/jcmkk3/trochilidae#berylline), and my unibody board the [ʻākohekohe](https://github.com/grassfedreeve/akohekohe/).

Two versions for choc switches are available:
- The default-spacing solder-only version (in the [pcb](https://github.com/grassfedreeve/pueo/tree/main/pcb) directory)
- The minimal-choc-spacing solder-only version with the tightest spacing that choc V1 switches allow for (in the [pcb_min_choc](https://github.com/grassfedreeve/pueo/tree/main/pcb_min_choc) directory)
  **Note:** You will have to procure min-spacing keycaps. I am not aware of any commercial solution. Recommendation: [Philadelphia Minimalist](https://github.com/pseudoku/PseudoMakeMeKeyCapProfiles/blob/master/Philadelphia_Minimalist.scad) by [Pseudoku](https://github.com/pseudoku). There are also currently no 1.5u min-space keycaps, these will need to be generated.

**Warning:** The min-choc-spacing version has not been tested yet!

# Keymap
Example keymap for how you might use this many keys, created using caksoylar's great [keymap-drawer](https://github.com/caksoylar/keymap-drawer)
![keymap](https://github.com/grassfedreeve/pueo/blob/main/img/example_keymap.svg)
Alternative base layouts, Colemak DH, [Bird](https://github.com/jcmkk3/bird-layout), and a Gallium mod shared to me by [ssbb](https://github.com/ssbb) are also great options:
![altbase](https://github.com/grassfedreeve/pueo/blob/main/img/alt_base.svg)

## BOM
- 2 pcbs
- 2 nice!nanos v2
- 26 kailh choc low profile switches
- 26 keycaps
- 2 [100mAh 401230 batteries](https://www.ebay.com.au/itm/175225874566)
- 2 [power switchs](https://www.aliexpress.com/item/1005006213873906.html?)
- 2 [reset buttons TS-1236-4.3](https://www.aliexpress.com/item/1005001629184984.html)]

# Tenting
The pueo was built intending to be used with the great [SpitKB Tenting Puck](https://splitkb.com/products/tenting-puck) and mounted on smallrig magic arms. As of publishing the board they were out of stock so I am using magnetic rings for now. 

![pueo-tenting](https://github.com/grassfedreeve/pueo/blob/main/img/pueo_tenting.jpg?raw=true)

## Firmware
ZMK is what I use and have setup a module for: [peuo ZMK Module](https://github.com/grassfedreeve/zmk-keyboards-pueo) 

## Inspiration & Thanks
- GEIST's [TOTEM](https://github.com/GEIGEIGEIST/TOTEM) keyboard
- jcmkk3's [berylline](https://github.com/jcmkk3/trochilidae#berylline) and rufous which I based the ergogen config on and used their great footprints.
- apfel's [zilpzalp](https://github.com/kilipan/zilpzalp) keyboard
- PJE66's [hummingbird](https://github.com/PJE66/hummingbird) keyboard
- Weteor's [grumpy](https://github.com/weteor/Grumpy) and [fitis](https://github.com/weteor/fitis)
- apsu's [aptmak](https://github.com/apsu/aptmak) keyboard layout
