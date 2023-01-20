import React from "react";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful
 * when you want to change your logo depending on the theme you are on.
 */
export default function Logo({ fill }) {
  return (
      <>
	  <img height="50px" width="50px" alt="avo" src="https://user-images.githubusercontent.com/85568177/213666927-1530f027-7944-406a-b34a-cabfd35a7dc7.jpg" />
      </>
  );
}
