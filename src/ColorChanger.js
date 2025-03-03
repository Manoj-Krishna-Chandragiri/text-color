import React ,{Component} from "react";
class ColorChanger extends Component{
    constructor(props){
        super(props);
        this.state={
            textColor:"black",
            fontSize:"20px",
            fontstyle:"normal",
            textDecoration:"none",
        };
        this.watermarkStyle = {
            position : 'absolute',
            top : '50%',
            left : '50%',
            transform : 'translate(-50%,-50%)',
            zindex:'-1',
            opacity:'0.3',
            fontFamily:'Arial sans-serif',
            fontSize:'Normal',
            color:'blue',
        };

    }
    handleTextColorChange = (event) =>{
        this.setState({fontstyle:event.target.value});
    };
    handleDecorationChange = (event) =>{
        this.setState({textDecoration:event.target.value});
    };
    render(){
        const {textColor,fontSize,fontstyle,textDecoration}=this.state;
        return(
            <div> style = {{textAlign:'center',marginTop:'50px'}}
            <div
                style ={this.watermarkStyle}>Ch . Narasimha Reddy </div>
                <label htmlFor = 'colorpicker'>Select Text Color:</label>
                <input
                type='color'
                id ='colorpicker'
                />
                <label htmlFor = 'fontSize'>Select Font size : </label>
                <input
                type='color'
                id='colorpicker'
                value={textColor}
                onChange={this.handleTextColorChange}
                /></div>
        )

    }
}