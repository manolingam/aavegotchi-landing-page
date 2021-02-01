# Aavegotchi

The official landing / marketing page of Aavegotchi.

![app](https://res.cloudinary.com/saimano/image/upload/v1612173933/Aavegothci/aavegotchi_snapshot.png)

## Instructions

As the design is kind of unique and complex, below are some common helpers and instructions on how the implementation is done.

### File Structure
- **assets** contain all the static images, borders, icons, borders & fonts used in _png_ & _svg_ formats under their own categories.
- **sections** contain each of the different app sections starting from _one_ (top) to _seven_ (bottom) with each section folder holding their corresponding JSX & SASS.
- **utils** contain JS & SASS constants.

```
src ──|
      |   App.js
      │   App.scss
      │   index.css 
      │   index.js
      │   reportWebVitals.js
      │
      ├───assets
      │   ├───backgrounds
      │   │       dao_background.png
      │   │       drum_pattern_background.png
      │   │       ghost_pattern_background.svg
      │   │       ghst_token_background.svg
      │   │
      │   ├───borders
      │   │       black_box_border.png
      │   │       blue_box_border.png
      │   │       burn_box_border.png
      │   │       dark_red_box_border.png
      │   │       dark_red_pink_bg_border.png
      │   │       pink_box_border.png
      │   │       secondary_button_border.svg
      │   │       two_pixel_border.png
      │   │       violet_box_border.png
      │   │       violet_light_pink_border.png
      │   │
      │   ├───buttons
      │   │       pink_button.png
      │   │       pink_button.svg
      │   │       randomize_button.svg
      │   │       remind_me_button.svg
      │   │       violet_button.svg
      │   │
      │   ├───fonts
      │   │       pixelar.ttf
      │   │
      │   ├───icons
      │   │       dai_icon.svg
      │   │       dice_icon.svg
      │   │       fire_icon.svg
      │   │       ham_lines_icon.svg
      │   │       usdc_icon.svg
      │   │
      │   ├───images
      │   │       beach_snap_image.svg
      │   │       blue_arrow_image.png
      │   │       gotchigang_image.svg
      │   │       gotchi_image.svg
      │   │       pink_arrow_image.png
      │   │       portal_closed_image.svg
      │   │       portal_open_image.svg
      │   │       powered_by_aave_image.svg
      │   │       powered_by_chainlink_image.svg
      │   │       rainbow_text_image.svg
      │   │       violet_arrow_image.png
      │   │
      │   ├───logos
      │   │       aavegotchi_dao_logo.svg
      │   │       ghst_token_logo.svg
      │   │       header_logo.svg
      │   │
      │   └───overlays
      │           pixel_overlay_four.svg
      │           pixel_overlay_header.svg
      │           pixel_overlay_one.svg
      │           pixel_overlay_seven.svg
      │           pixel_overlay_six.svg
      │           pixel_overlay_three.svg
      │           pixel_overlay_two.svg
      │
      ├───sections
      │   ├───Five
      │   │       index.jsx
      │   │       styles.scss
      │   │
      │   ├───Four
      │   │       index.jsx
      │   │       styles.scss
      │   │
      │   ├───Header
      │   │       index.jsx
      │   │       styles.scss
      │   │
      │   ├───One
      │   │       index.jsx
      │   │       styles.scss
      │   │
      │   ├───Seven
      │   │       index.jsx
      │   │       styles.scss
      │   │
      │   ├───Six
      │   │       index.jsx
      │   │       styles.scss
      │   │
      │   ├───Three
      │   │       index.jsx
      │   │       styles.scss
      │   │
      │   └───Two
      │           index.jsx
      │           styles.scss
      │
      └───utils
              constants.scss
              constants.js
```

### Styling

The styles are done in SASS and all the 7 sections including header has the following common layout below. Elements inside the `core-container` have their own individual styles. Regarding responsiveness, we have 4 breakpoints (_960px, 760px, 600px & 400px)_ in each of the respective section _sass_ files. 

![layout](https://res.cloudinary.com/saimano/image/upload/v1612176738/Aavegothci/layout.png)
