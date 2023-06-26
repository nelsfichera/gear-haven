import React from "react";
import { getFire, getSelected } from "../utils/firebase";
import { all, allTrans } from "../utils/data";

const Help = () => {
  getFire().then((res) => console.log(res));
  getSelected().then((res) => console.log(res));

  //   const {
  //     tcin,
  //     item: {
  //       primary_barcode,
  //       merchandise_type_attributes,
  //       enrichment: {
  //         images: { alternate_image_urls, primary_image_url },
  //       },
  //       product_description,
  //     },
  //     price: { reg_retail },
  //     ratings_and_reviews: { statistics },
  //   } = all[0];

  const newobj = all.map((a) => {
    const {
      tcin,
      item: {
        primary_barcode,
        merchandise_type_attributes,
        enrichment: {
          images: { alternate_image_urls, primary_image_url },
        },
        product_description: {
          downstream_description,
          soft_bullets,
          bullet_descriptions,
          title,
        },
      },
      price: { reg_retail },
      ratings_and_reviews: {
        statistics: { rating },
      },
    } = a;
    return {
      tcin,
      primary_barcode,
      merchandise_type_attributes: merchandise_type_attributes.reduce(
        (acc, itm) => {
          return [
            ...acc,
            { name: itm.name, values: itm.values.map((v) => v.name) },
          ];
        },
        []
      ),
      images: [primary_image_url, ...alternate_image_urls],
      price: reg_retail,
      rating: rating.average,
      rating_count: rating.count,
      downstream_description,
      bullets: soft_bullets?.bullets,
      bullet_descriptions,
      title,
    };
  });
  console.log(122, newobj);
  // const imgs = [primary_image_url, ...alternate_image_urls];
  // const atts = merchandise_type_attributes.reduce((acc, itm) => {
  //   return [...acc, { name: itm.name, values: itm.values.map((v) => v.name) }];
  // }, []);
  // console.log(atts);

  console.log(
    44,
    allTrans.map((a) => {
      return {
        ...a,
        filter: {
          color: a.merchandise_type_attributes.find(
            (m) => m.name === "Color Family"
          )?.values[0],
          weight: a.merchandise_type_attributes.find(
            (m) => m.name === "Product Weight"
          )?.values[0],
          subtype: a.merchandise_type_attributes.find(
            (m) => m.name === "sporting goods subtype"
          )?.values[0],
          wheel: a.merchandise_type_attributes.find(
            (m) => m.name === "wheel height"
          )?.values[0],
          gears: a.merchandise_type_attributes.find(
            (m) => m.name === "number of gear speeds"
          )?.values[0],
        },
      };
    })
  );

  return (
    <div>
      {allTrans.map((a) => (
        <div className="list">
          <h2>{a.title}</h2>
          <img src={a.images[0] + "?w=150"} alt="" />
        </div>
      ))}
      {allTrans.map((a) => (
        <div className="atts">
          <p>
            {
              a.merchandise_type_attributes.find(
                (m) => m.name === "number of gear speeds"
              )?.values[0]
            }
          </p>
        </div>
      ))}

      {/* // <div className="imgs">
    //     {imgs.map((i) => (
    //       <img src={i} alt="" />
    //     ))}
    //   </div> */}
    </div>
  );
};

export default Help;