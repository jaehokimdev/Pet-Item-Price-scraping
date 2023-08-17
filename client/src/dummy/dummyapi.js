const dummy = [
  {
    title: "Arm & Hammer Clump & Seal Cat Litter - Clumping, Multi-Cat",
    price: "$ 29.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5269930?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-clump-and-seal-cat-litter---clumping-multi-cat-47716.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer Double Duty Cat Litter - Clumping",
    price: "$ 21.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5158112?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-double-duty-cat-litter---clumping-13403.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer Cat Litter - Deodorizer",
    price: "$ 4.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5279818?$sclp-prd-main_large$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-cat-litter---deodorizer-49686.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer Cloud Control Cat Litter - Clumping, Multi Cat",
    price: "$ 25.99-29.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5290624?$sclp-prd-main_large$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-cloud-control-cat-litter---clumping-multi-cat-53643.html?cgid=5000001&fmethod=Browse",
  },
  {
    title:
      "Arm & Hammer Tartar Control Puppy Dental Training Kit - Vanilla Ginger",
    price: "$ 19.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5247465?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-tartar-control-puppy-dental-training-kit---vanilla-ginger-35845.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer AbsorbX Lightweight Clumping Multi Cat Litter",
    price: "$ 21.99-29.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5303293?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-absorbx-lightweight-clumping-multi-cat-litter-59913.html?cgid=5000001&fmethod=Browse",
  },
  {
    title:
      "Arm & Hammer™ Clump & Seal Microguard Clumping Multi-Cat Clay Cat Litter - Low Dust",
    price: "$ 29.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5247260?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammerandtrade-clump-and-seal-microguard-clumping-multi-cat-clay-cat-litter---low-dust-34060.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer Pro Clean Dental Kit",
    price: "$ 19.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5322090?$sclp-prd-main_large$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-pro-clean-dental-kit-68624.html?cgid=5000001&fmethod=Browse",
  },
  {
    title:
      "Arm & Hammer Plaque Removal Dental Kit for Dogs - Charcoal Toothpaste and Toothbrush",
    price: "$ 19.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5309884?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-plaque-removal-dental-kit-for-dogs---charcoal-toothpaste-and-toothbrush-63637.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer Tartar Control Dog Dental Kit - Beef",
    price: "$ 19.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5170578?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-tartar-control-dog-dental-kit---beef-13039.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer Clinical Gum Health Dog Dental Kit - Chicken",
    price: "$ 19.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5170583?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-clinical-gum-health-dog-dental-kit---chicken-13043.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer Tartar Control Enzymatic Dog Toothpaste - Beef",
    price: "$ 14.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5170582?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-tartar-control-enzymatic-dog-toothpaste---beef-13042.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer Slide Easy Clean-Up Cat Litter - Clumping, Multi-Cat",
    price: "$ 29.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5309396?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-slide-easy-clean-up-cat-litter---clumping-multi-cat-62975.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer Charcoal Bright Enzymatic Toothpaste",
    price: "$ 14.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5322089?$sclp-prd-main_large$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-charcoal-bright-enzymatic-toothpaste-68623.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer Fresh Breath Dog Dental Kit - Vanilla Ginger",
    price: "$ 19.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5209012?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-fresh-breath-dog-dental-kit---vanilla-ginger-22419.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer Fresh Breath Cat Dental Water Additive",
    price: "$ 9.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5191064?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-fresh-breath-cat-dental-water-additive-12316.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer Fresh Breath Enzymatic Dog Toothpaste - Chicken",
    price: "$ 14.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5170581?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-fresh-breath-enzymatic-dog-toothpaste---chicken-13041.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer Tartar Control Dog Dental Kit - Banana Mint",
    price: "$ 19.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5225195?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-tartar-control-dog-dental-kit---banana-mint-26037.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer Slide Cat Litter - Clumping, Multi-Cat",
    price: "$ 25.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5269929?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-slide-cat-litter---clumping-multi-cat-47715.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer Clump & Seal Multi-Cat Litter",
    price: "$ 21.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5215390?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-clump-and-seal-multi-cat-litter-20380.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer Double Duty Cat Litter - Clumping, Deodorizer",
    price: "$ 25.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5279849?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-double-duty-cat-litter---clumping-deodorizer-49690.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer AbsorbX Lightweight Clumping Unscented Cat Litter",
    price: "$ 21.99-29.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5303294?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-absorbx-lightweight-clumping-unscented-cat-litter-59914.html?cgid=5000001&fmethod=Browse",
  },
  {
    title: "Arm & Hammer Clump & Seal Cat Litter - Clumping, Multi-Cat",
    price: "$ 25.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5279846?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammer-clump-and-seal-cat-litter---clumping-multi-cat-49689.html?cgid=5000001&fmethod=Browse",
  },
  {
    title:
      "Arm & Hammer™ Clump & Seal Slide Clumping Clay Cat Litter - Low Dust",
    price: "$ 29.99",
    image:
      "https://s7d2.scene7.com/is/image/PetSmart/5263596?$sclp-prd-main_small$",
    address:
      "https://www.petsmart.ca/featured-brands/arm-and-hammer/arm-and-hammerandtrade-clump-and-seal-slide-clumping-clay-cat-litter---low-dust-41598.html?cgid=5000001&fmethod=Browse",
  },
];

export default dummy;
