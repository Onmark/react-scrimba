
function copyEmail() {
    const email = "marko.on@seznam.com";
    navigator.clipboard.writeText(email);
}

export default function Navbar() {
    return (
<nav className="header-nav-buttons">
    <button className="btn btn-email" onClick={copyEmail}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            width="16"
            height="16"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
        </svg>
         Email
    </button>
    <a className="btn btn-linkedin"
        href="https://www.linkedin.com/in/ond%C5%99ej-markovi%C4%8D-20416829a/"
        target="_blank"
        rel="noopener noreferrer"
    >
            <span>
                <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1c1.38 0 2.5 1.12 2.5 2.5zM0 8h5v16H0zM7.5 8h4.78v2.18h.07c.66-1.24 2.28-2.55 4.69-2.55 5.02 0 5.95 3.3 5.95 7.59V24h-5V16.1c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.17V24h-5z"/>
            </svg>
            </span>
             LinkedIn
    </a>
</nav>
    )
}