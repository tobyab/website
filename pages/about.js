import styles from '../styles/About.module.scss'

export default function About() {
  return(
<body>
    <h1 class="title">//About.</h1>
    <p class="subtitle">All about me.</p>
    <img class="me" src="toby.png">

    <article class="para0">
    <p>Hi, I'm Toby. I'm a 13 year old full <br> stack web developer from the UK.<br>
         I'm interested in everything to do<br> with tech, from programming to<br> building computers.<br>
         <p>
        I started programming when I was only<br> 7 years old, and I built my first computer<br> at only 10 years old. Over the past few <br>
        years, I've gradually gotten more and more<br> interesed in all sorts of different projects, <br>tools and languages! <p>
            Recently, I've been really interested in<br> open source programming and I've been<br> helping loads of people with their own projects,<br> and I'd love to try and help you with yours.<br> So, lets <a href="mailto:toby@tobyb.xyz">talk</a>.</p>
    </article>

    <a class="Rethome" href="https://tobyb.xyz/index.html">Toby B.</a>

</body>
  );
}
