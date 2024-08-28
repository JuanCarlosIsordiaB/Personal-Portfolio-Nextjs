

import React from 'react'

const Container = ({
  image,
  title,
  href,
  className,
  containerClassName,
}: {
  image: string;
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div>
      <div>
        image
      </div>

    </div>
  )
}

export default Container