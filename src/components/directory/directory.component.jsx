import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import beretImgRedS from './image/red-small.jpg';
import beretImgGreyS from './image/grey-small.jpg';
import beretImgBlackS from './image/black-small.jpg';
import beretImgRedL from './image/red-large.jpg';
import beretImgGreyL from './image/grey-large.jpg';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: beretImgRedS,
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'berets',
          imageUrl: beretImgGreyS,
          id: 2,
          linkUrl: ''
        },
        {
          title: 'caps',
          imageUrl: beretImgBlackS,
          id: 3,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: beretImgGreyL,
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'womens',
          imageUrl: beretImgRedL,
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => {
            return <MenuItem key={id} {...otherSectionProps} />
        })}
      </div>
    );
  }
}

export default Directory;