import './Section.css';

// object --> title, subtitle, date, location, info 

export default function Section({ data }) {
    return (
        <div className='data'>
            <p>{ data.date }</p>
            <h2>{ data.title }</h2>
            <h3>{ data.subtitle }</h3>
            <p>{ data.info }</p>
        </div>
    );
}