import MapLayout from '../components/MapLayout/MapLayout';

export default function Home() {
  console.log('data',)
  return (
    <div>
        <MapLayout/>
    </div>
  )
}

// const defaultEndpoint = 'https://comute2.herokuapp.com/api/faq/';
// export async function getServerSideProps() {
//   const res = await fetch(defaultEndpoint);
//   const data = await res.json;
//   return {
//     props: {
//       data
//     }
//   }
// }
