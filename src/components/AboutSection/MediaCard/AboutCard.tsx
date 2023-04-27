import React from 'react'
import {MediaCard} from '@shopify/polaris';

export interface IMediaCardProps {};

const AboutCard: React.FunctionComponent<IMediaCardProps> = props => {
  return (
    <section
    style ={{
      margin: '50px'
    }}>
       <MediaCard
      title="Why Buy From Dan?"
      primaryAction={{
        content: 'Find out more',
        onAction: () => {
          window.location.href='/products'
        },
      }}
      description="There’s a certain family feel here at Dan's Hats that you don’t get at other stores. We’re pretty easy-going, 
      friendly and we try to put our customers at ease. I feel very strongly about putting a customer at ease 
      especially if this is the first time buying a hat. I like to make friends with my customers and let them 
      know it’s going to be ok. We’ll figure it out together.
      I like to give my customers a real education about hats…what they’re made of, the different styles available, 
        why a particular shape fits their face better than others. I figure the more they know about hats, the more 
        comfortable they will feel and the more they will appreciate what we do at Dan's Hats.
        I think customers like it when someone with real experience and knowledge waits on them. 
        They like the personal attention and I enjoy helping a customer create the perfect hat. When I wait on a customer, 
        I know the hat will be perfect. I know it’s perfect when they smile."
    >
      <img
        alt=""
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src="https://i.redd.it/lrjjyc9stku81.png"
      />
    </MediaCard>

    </section>
   
  );
  
}

export default AboutCard