

export default function Header() {
    return (
        <header className='header'>
            <img className='header-img' src="/src/react-logo.png" alt="React logo" />
            <nav>
                <ul className='unordered-list'>
                    <li className='unordered-list-lists'>Pricing</li>
                    <li className='unordered-list-lists'>About</li>
                    <li className='unordered-list-lists'>Contact</li>
                </ul>
            </nav>
        </header>
    )
}