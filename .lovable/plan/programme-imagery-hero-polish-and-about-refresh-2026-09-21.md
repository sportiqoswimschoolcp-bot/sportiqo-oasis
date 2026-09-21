# Programme imagery, hero polish, and About refresh

## Scope

Update the programme photography, homepage hero styling/content, and About page only. Preserve navigation, footer, location pages, remaining homepage sections, and existing contact functionality.

## Changes

- Use the supplied indoor group photo for every adult-programme image placement, including the homepage programme card and full programmes page.
- Use the supplied award-group photo for every athlete-training image placement, including the homepage programme card and full programmes page.
- Remove the secondary “Chat on WhatsApp” action from the homepage hero.
- Restyle “Book Your Free Trial” as a fully oval orange button with a restrained shimmer and accessible reduced-motion behavior.
- Give the hero headline a chic, elegant, athletic display treatment while keeping it highly readable.
- Make “Sportiqo Swim School” orange.
- Change the hero programme line to show “Toddlers (6 months to 3.5 years)” and retain the other programme names.
- and also in **Four tracks. Each one taken seriously. section, the kids card put it second** 
- Add subtle orange abstract line accents that frame the hero copy without covering swimmers or faces.
- Simplify the About page into a concise general introduction and a clear list of the four branches: Prabhadevi, Cuffe Parade, Kothrud, and BKC.
- Remove the milestones and detailed credential/partnership blocks from About.  
  
  
/* From [Uiverse.io](http://Uiverse.io) by Shoh2008 */ 
  .loader {
    position: relative;
    font-size: 16px;
    width: 5.5em;
    height: 5.5em;
  }
  .loader:before {
    content: '';
    position: absolute;
    transform: translate(-50%, -50%) rotate(45deg);
    height: 100%;
    width: 4px;
    background: #fff;
    left: 50%;
    top: 50%;
  }
  .loader:after {
    content: '';
    position: absolute;
    left: 0.2em;
    bottom: 0.18em;
    width: 1em;
    height: 1em;
    background-color: orange;
    border-radius: 15%;
    animation: rollingRock 2.5s cubic-bezier(.79, 0, .47, .97) infinite;
  }
  @keyframes rollingRock {
    0% {
      transform: translate(0, -1em) rotate(-45deg)
    }
    5% {
      transform: translate(0, -1em) rotate(-50deg)
    }
    20% {
      transform: translate(1em, -2em) rotate(47deg)
    }
    25% {
      transform: translate(1em, -2em) rotate(45deg)
    }
    30% {
      transform: translate(1em, -2em) rotate(40deg)
    }
    45% {
      transform: translate(2em, -3em) rotate(137deg)
    }
    50% {
      transform: translate(2em, -3em) rotate(135deg)
    }
    55% {
      transform: translate(2em, -3em) rotate(130deg)
    }
    70% {
      transform: translate(3em, -4em) rotate(217deg)
    }
    75% {
      transform: translate(3em, -4em) rotate(220deg)
    }
    100% {
      transform: translate(0, -1em) rotate(-225deg)
    }
  }
        for loading code and   
    
  /* From [Uiverse.io](http://Uiverse.io) by barisdogansutcu */ 
  button {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;
   font-family: inherit;
   font-size: 13px;
   font-weight: 500;
   text-transform: uppercase;
   letter-spacing: 0.4px;
   color: #7e97b8;
   background-color: #e0e8ef;
   border-style: solid;
   border-width: 2px 2px 2px 2px;
   border-color: rgba(255, 255, 255, 0.333);
   border-radius: 40px 40px 40px 40px;
   padding: 16px 24px 16px 28px;
   transform: translate(0px, 0px) rotate(0deg);
   transition: 0.2s;
   box-shadow: -4px -2px 16px 0px #ffffff, 4px 2px 16px 0px rgb(95 157 231 / 48%);
  }
  button:hover {
   color: #516d91;
   background-color: #E5EDF5;
   box-shadow: -2px -1px 8px 0px #ffffff, 2px 1px 8px 0px rgb(95 157 231 / 48%);
  }
  button:active {
   box-shadow: none;
  }  
    
  for hero section book your free trial button

## Technical details

- Store both uploaded photos as CDN asset pointers and expose them through the shared image catalogue.
- Keep hero decoration local to the homepage and use existing semantic orange/navy tokens.
- Verify the homepage and programmes/About pages on desktop and mobile, including crops, text fit, animation, and links.