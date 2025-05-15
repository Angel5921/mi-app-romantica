import { useEffect } from 'react';
import './FallingHearts.css';

function FallingHearts() {
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerText = '❤️'; // Este detalle es clave
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = 2 + Math.random() * 3 + 's';
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
}

export default FallingHearts;