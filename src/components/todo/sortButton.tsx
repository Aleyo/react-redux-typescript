import * as React from 'react';

interface LinkProp {
  children: React.ReactNode;
  order: string;
  onClick: Function;
}

export class SortButton extends React.Component<LinkProp, any> {

  constructor(props: any, context: any) {
    super(props, context);

    this.sorting = this.sorting.bind(this);
  }

  sorting(event: any) {
    event.preventDefault();

    let {onClick, order} = this.props;
    onClick(order);
  }

  render() {

    let { children } = this.props;

    return (
      <button type='button' className='btn btn-default}'  onClick={this.sorting}> {children}</button>
    );
  }
}
