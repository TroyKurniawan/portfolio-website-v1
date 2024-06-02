import '../styles/Section.css';

// object --> title, subtitle, date, location, info 

export default function Section({ data, img }) {
    return (
        <div className='section-container'>
            {img && <img src={img} alt={data.title} className='blue-shadow-box'/>}
            <div className='data'>
                <p className='date'>{ data.date }</p>
                <h2>{ data.title }</h2>
                <h3>{ data.subtitle }</h3>
                <p>{ data.info }</p>
                <div class='section-footer'>
                    <DisplaySkills data={data} />
                    <DisplayLink data={data} />
                </div>
            </div>
            
        </div>
    );
}

// ================================

function DisplaySkills ({data}) {
    if(data.skills !== '') {
        let skillsArray = data.skills.split(',');
        for (let i=0; i<skillsArray.length; i++){
            skillsArray[i] = <span className='skill badge blue-shadow-box'>{skillsArray[i]}</span>
        }
        return skillsArray;
    }
    else {
        return null;
    }
}

function DisplayLink ({data}) {
    if(data.link !== '') {
        return <div className='section-link'><a className='btn btn-dark' href={ data.link } target="_blank" rel="noopener noreferrer">{ data.link_text}</a></div>;
    }
    else {
        return null;
    }
}