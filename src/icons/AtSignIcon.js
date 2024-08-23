export default function AtSignIcon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <circle cx='12' cy='12' r='4' />
      <path d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8' />
    </svg>
  )
}
