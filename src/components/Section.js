import './Section.css';

// object --> title, subtitle, date, location, info 

export default function Section({ data }) {
    return (
        <div className='section'>
            <h2><b>{ data.title }</b></h2>
            <h3>{ data.subtitle }</h3>
            <div className='about-desc'>
                <p>{ data.info }</p>
            </div>
        </div>
    );
}