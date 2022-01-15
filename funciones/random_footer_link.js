const d = document,
      links = [
          'https://github.com/javiervaleriano',
          'https://devchallenges.io/portfolio/javiervaleriano',
          'https://codepen.io/javiervaleriano'
      ];

export default function randomLink() {
    d.querySelector('.page__author__link').href = links[Math.floor(Math.random() * links.length)];
}