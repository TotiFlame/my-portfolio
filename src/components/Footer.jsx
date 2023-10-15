import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Footer () {
    return (
        <footer className="fixed bottom-0 w-full h-12 flex justify-center align-center">
            <div className="w-1/3 flex justify-evenly items-center">
                <a href="https://github.com/TotiFlame" target='_blank' className="footer-links">GITHUB<ArrowOutwardIcon className='arrow-link'/></a>
                <a href="https://www.linkedin.com/in/fernandez-santiago/" target='_blank' className="footer-links">LINKEDIN<ArrowOutwardIcon className='arrow-link'/></a>
                <a href="mailto:santiagoferna4321@gmail.com" target='_blank' className="footer-links">MAIL<ArrowOutwardIcon className='arrow-link'/></a>
            </div>
        </footer>
    )
}

export default Footer