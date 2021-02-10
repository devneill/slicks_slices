import React from 'react';
import { graphql } from 'gatsby';

export default function SlicemastersPage({ data }) {
  console.log(data);
  return (
    <>
      <p>Hey! I'm the Slicemasters page</p>
      <div>
        {data.slicemasters.nodes.map((slicemaster) => (
          <p>{slicemaster.name}</p>
        ))}
      </div>
    </>
  );
}

export const query = graphql`
  query {
    slicemasters: allSanityPerson {
      nodes {
        name
        description
        slug {
          current
        }
        image {
          asset {
            fixed(width: 200, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
