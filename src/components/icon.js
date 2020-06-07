import React from 'react';

const svgIcons = (
  size,
  color,
) => ({
  github: (props) => (
    <svg width={size} height={size} viewBox="0 0 47 47" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.171 6.714c9.642 0 17.458 8.013 17.458 17.899 0 7.906-4.997 14.613-11.929 16.982-.885.177-1.2-.382-1.2-.859 0-.59.022-2.517.022-4.912 0-1.67-.559-2.758-1.186-3.313 3.888-.444 7.973-1.958 7.973-8.832 0-1.955-.677-3.551-1.798-4.804.181-.453.78-2.273-.171-4.738 0 0-1.463-.48-4.796 1.835a16.401 16.401 0 00-4.373-.602 16.364 16.364 0 00-4.37.602C16.467 13.657 15 14.137 15 14.137c-.947 2.465-.349 4.285-.169 4.738-1.115 1.253-1.798 2.849-1.798 4.804 0 6.857 4.076 8.394 7.953 8.846-.499.447-.95 1.235-1.108 2.393-.995.457-3.523 1.249-5.08-1.487 0 0-.924-1.72-2.676-1.845 0 0-1.702-.023-.119 1.087 0 0 1.143.55 1.938 2.619 0 0 1.024 3.194 5.881 2.112.009 1.496.024 2.906.024 3.332 0 .473-.32 1.027-1.192.861-6.937-2.365-11.939-9.076-11.939-16.984 0-9.886 7.818-17.899 17.457-17.899"
        fill={color}
      />
    </svg>
  ),
  search: (props) => (
    <svg width={size} height={size} viewBox="0 0 35 35" fill="none" {...props}>
      <path
        d="M30.645 27.496c.236.237.355.525.355.863 0 .339-.119.627-.355.864l-1.422 1.422a1.175 1.175 0 01-.864.355c-.338 0-.626-.119-.863-.355l-5.078-5.079a1.175 1.175 0 01-.355-.863v-.812c-1.896 1.49-4.063 2.234-6.5 2.234-2.912 0-5.4-1.033-7.465-3.098C6.033 20.962 5 18.474 5 15.562c0-2.911 1.033-5.4 3.098-7.464C10.163 6.033 12.65 5 15.562 5c2.912 0 5.4 1.033 7.465 3.098 2.065 2.065 3.098 4.553 3.098 7.464 0 2.438-.745 4.605-2.234 6.5h.812c.339 0 .626.119.863.356l5.079 5.078zM10.94 20.184c1.287 1.252 2.827 1.878 4.621 1.878 1.795 0 3.318-.626 4.57-1.878 1.287-1.287 1.93-2.827 1.93-4.622 0-1.794-.643-3.317-1.93-4.57-1.252-1.286-2.775-1.93-4.57-1.93-1.794 0-3.334.644-4.62 1.93-1.253 1.253-1.88 2.776-1.88 4.57 0 1.795.627 3.335 1.88 4.622z"
        fill={color}
      />
    </svg>
  ),
  star: (props) => (
    <svg width={size} height={size} viewBox="0 0 35 35" fill="none" {...props}>
      <path
        d="M31 14.688c0-.473-.52-.662-.909-.725l-8.145-1.15-3.65-7.167c-.147-.3-.423-.646-.796-.646-.373 0-.649.347-.795.646l-3.65 7.167-8.146 1.15c-.406.064-.909.253-.909.725 0 .284.21.551.406.756l5.906 5.577-1.396 7.876c-.016.11-.032.205-.032.315 0 .41.211.788.682.788.227 0 .438-.079.648-.189l7.286-3.718 7.285 3.718c.195.11.422.189.65.189.47 0 .665-.378.665-.788 0-.11 0-.204-.017-.315l-1.395-7.876 5.89-5.577c.211-.205.422-.472.422-.756z"
        fill={color}
      />
    </svg>
  ),
});

export const Icon = ({
  name = 'github',
  size = 35,
  color = '#ffffff',
  skeleton = false,
  ...props
}) => {
  const colorValue = (skeleton) ? '#666666' : color;
  const Component = svgIcons(size, colorValue)[name];
  return <Component {...props} />
}