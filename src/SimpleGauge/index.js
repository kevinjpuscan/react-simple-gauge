import React from 'react';
class SimpleGauge extends React.Component{
    constructor(props){
        super(props);
        this.container = React.createRef();
        this.base = React.createRef();
        this.progress = React.createRef();
		this.point = React.createRef();
		this.text = React.createRef();
    }
    componentDidMount(){

		const percent=this.props.percent?this.props.percent:100;

		let container=this.container.current;
		const width=container.clientWidth;
		
		let strokeWidth=width/12;
		let height=(width/2)+(strokeWidth/2);
		let ratio=(width-(strokeWidth))/2;
		let offset=Math.PI*ratio;

		container.style.height=height+'px';

		let bar=percent*offset/100;
		let offsetBar=(offset*2)-bar;
        
		let circle=this.base.current;
			circle.style.width='100%';
			circle.style.height='100%';
			circle.style.fill='none';
			circle.style.stroke='#E5E5E5';	
			circle.style.strokeLinecap='round';
			circle.setAttribute('cx',ratio);
			circle.setAttribute('cy',ratio);
			circle.setAttribute('r',ratio);
			circle.style.strokeDashoffset=offset;
			circle.style.strokeDasharray=offset;
			circle.style.strokeWidth=strokeWidth.toString();
            circle.style.transform=`translate(${strokeWidth/2}px,${strokeWidth/2}px)`;
            
		circle=this.progress.current;
			circle.style.width='100%';
			circle.style.height='100%';
			circle.style.fill='none';
			circle.style.stroke='#E5E5E5';	
			circle.style.strokeLinecap='round';
			circle.setAttribute('cx',ratio);
			circle.setAttribute('cy',ratio);
            circle.setAttribute('r',ratio);
            circle.style.strokeDashoffset=offset;
			circle.style.strokeWidth=strokeWidth.toString();
            circle.style.transform=`translate(${strokeWidth/2}px,${strokeWidth/2}px)`;
        
		circle=this.point.current;
			circle.style.width='100%';
			circle.style.height='100%';
			circle.style.fill='none';
			circle.style.stroke='#E5E5E5';	
			circle.style.strokeLinecap='round';
			circle.setAttribute('cx',ratio);
			circle.setAttribute('cy',ratio);
			circle.setAttribute('r',ratio);
			circle.style.strokeWidth=strokeWidth.toString();
			circle.style.transform=`translate(${strokeWidth/2}px,${strokeWidth/2}px)`;


		let progress=this.progress.current;
		progress.style.stroke='#5BB030';
		progress.style.strokeDasharray=`${bar} ${offsetBar}`;

		let point=this.point.current;
		point.style.strokeDasharray=`1 ${(offset*2)-1}`;
		point.style.strokeDashoffset=offset-bar;
		point.style.stroke='black';

		let text=this.text.current;
		text.style.fontSize=`${height/3}px`;
		text.style.fontWeight='bold';
		text.style.position='absolute';
		text.style.top=`${height*2/3}px`;
		text.style.left=`${(width-text.clientWidth)/2}px`;
		text.style.color='#5BB030';
		
    }    
    render(){
        return(
			<div className="container" style={{width:this.props.width?this.props.width:'100%'}} ref={this.container}>
				<svg className="gauge-svg">
					<circle ref={this.base}></circle>
					<circle ref={this.progress}></circle>
					<circle ref={this.point}></circle>
				</svg>	
				<span className="number" ref={this.text}>{this.props.percent?this.props.percent:100}%</span>
			</div>
        );
    }
}

export default SimpleGauge;