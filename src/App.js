import React, { Component } from 'react';
import ColoredBox from './coloredBox/ColoredBox'
import './App.css';

const TOTAL_BOXES = 32

class App extends Component {
  constructor(props) {
    super(props);

    const colors = Array(TOTAL_BOXES).fill().map(this.getRandomColor, this)

    // const colors = []
    // let counter = 0

    // while (counter < TOTAL_BOXES) {
    //   colors.push(this.getRandomColor())

    //   counter++
    // }

    this.state = {
      colors
    }

    this.randomiseColors()
  }

  getRandomColor() {
    return this.props.allColors[
      Math.floor(Math.random() * this.props.allColors.length)
    ]
  }

  randomiseColors() {
    setInterval(() => {
      const randomBoxIndex = Math.floor(Math.random() * this.state.colors.length)
  
      // const randomNewColor =  this.getRandomColor()
  
      // const colors = this.state.colors.map((color, idx) => {
      //   if (idx === randomBoxIndex) {
      //     return randomNewColor
      //   }
  
      //   return color
      // })

      const colors = this.state.colors.slice()
      colors[randomBoxIndex] = this.getRandomColor()

      this.setState({ colors })
    }, 300)
  }
  
  render() {
    const { colors } = this.state
    const boxes = colors.map((color, idx) => (
      <ColoredBox key={idx} color={color} />
    ))

    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}

App.defaultProps = {
  allColors: [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
  ]
};

export default App;
