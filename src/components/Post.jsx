import React from 'react'
import { Card, Col } from 'react-bootstrap'

const Post = props => {
  return (
    <Card>
      <Card.Body>
      { props.image ? <img style={{float: "left"}}width={256} src={props.image}/> : null}
        I am a post Lorem ipsum dolor amet prism leggings bitters vegan meggings raclette letterpress fingerstache sartorial. Polaroid taiyaki kitsch, godard sustainable lyft narwhal waistcoat venmo kombucha offal umami. Poutine raclette truffaut, gluten-free intelligentsia church-key venmo taxidermy tacos poke bicycle rights. Tbh beard you probably haven't heard of them, portland gentrify twee cornhole art party ramps kinfolk pinterest. Kale chips asymmetrical pitchfork bushwick. Neutra next level snackwave taiyaki, etsy activated charcoal quinoa subway tile roof party.

Pabst pour-over vape vegan. Slow-carb master cleanse wolf jean shorts wayfarers palo santo chicharrones hot chicken readymade raw denim distillery. Truffaut meh kale chips offal, marfa tbh vinyl chia cardigan. Brooklyn distillery trust fund, meh shaman bicycle rights adaptogen. Tofu vaporware seitan, williamsburg everyday carry stumptown la croix hammock flexitarian narwhal.
      </Card.Body>
    </Card>
  )
}

export default Post
