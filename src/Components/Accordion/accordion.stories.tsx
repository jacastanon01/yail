import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import { useState } from "react";

import Accordion from ".";

const meta = {
  title: "Core / Accordion",
  component: Accordion,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Accordion>;

export default meta;

const sections = [
  {
    id: 20,
    description:
      "24/7 Antimony Sausages West Mouse Chevrolet Chips Unbranded lime whenever",
    title: "sensor Wooden Turkish",
    order: 1,
    items: [
      {
        id: 20,
        title: "pascal Tellurium an program Beryllium South mint Steel",

        order: 1,
        videoURL: "https://www.youtube.com/watch?v=R9Q_y7K03jE"
      },
      {
        id: 56,
        title: "Jeep circuit hmph payment East",

        order: 2,
        videoURL: "https://www.youtube.com/watch?v=uxQxd_z_uqc"
      },
      {
        id: 92,
        title:
          "Alaska Keyboard Checking Metal Cotton Kia concerning delirious Switchable",

        order: 3,
        videoURL: "https://www.youtube.com/watch?v=uxQxd_z_uqc"
      },
      {
        id: 127,
        title: "Southwest misuse",

        order: 4,
        videoURL: "https://www.youtube.com/watch?v=uxQxd_z_uqc"
      },
      {
        id: 163,
        title: "AI repellendus Southeast Northeast extend Denis",

        order: 5,
        videoURL: "https://www.youtube.com/watch?v=uxQxd_z_uqc"
      },
      {
        id: 199,
        title: "unbearably",

        order: 6,
        videoURL: "https://www.youtube.com/watch?v=R9Q_y7K03jE"
      }
    ]
  },
  {
    id: 55,
    description:
      "breastplate inch navigate suspiciously withdrawal hibernate Tasty Guilder red female",
    title: "Principal female group",
    order: 2,
    items: [
      {
        id: 235,
        title:
          "generating withdrawal unbearably Cab digital regularly Industrial North North",

        order: 1,
        videoURL: "https://www.youtube.com/watch?v=uxQxd_z_uqc"
      },
      {
        id: 270,
        title: "Central Chromium Incredible Gasoline optical",

        order: 2,
        videoURL: "https://www.youtube.com/watch?v=R9Q_y7K03jE"
      },
      {
        id: 304,
        title: "Mobility Specialist Gasoline quo",

        order: 3,
        videoURL: "https://www.youtube.com/watch?v=uxQxd_z_uqc"
      },
      {
        id: 339,
        title: "Lilangeni reaffirm hideous Executive Forges",

        order: 4,
        videoURL: "https://www.youtube.com/watch?v=uxQxd_z_uqc"
      },
      {
        id: 376,
        title:
          "Convertible abolish strategic Soft compressing limp female Solutions Bespoke",

        order: 5,
        videoURL: "https://www.youtube.com/watch?v=uxQxd_z_uqc"
      },
      {
        id: 412,
        title:
          "Delaware shadowy Account service input Handcrafted Northwest Madonna",

        order: 6,
        videoURL: "https://www.youtube.com/watch?v=uxQxd_z_uqc"
      }
    ]
  },
  {
    id: 88,
    description:
      "though West SMTP roost boo Tactics whoa payment Investor turquoise",
    title: "Concrete West Central",
    order: 3,
    items: [
      {
        id: 446,
        title: "outside nonconforming Pontiac BMW Curium",

        order: 1,
        videoURL: "https://www.youtube.com/watch?v=uxQxd_z_uqc"
      },
      {
        id: 481,
        title:
          "Handmade South Coordinator International turquoise infrastructures Pop Computers Sleek",

        order: 2,
        videoURL: "https://www.youtube.com/watch?v=uxQxd_z_uqc"
      },
      {
        id: 516,
        title: "ew Gasoline",

        order: 3,
        videoURL: "https://www.youtube.com/watch?v=uxQxd_z_uqc"
      },
      {
        id: 552,
        title:
          "global Home Drive Pickup wonderful Table Southwest Electronics monitor",

        order: 4,
        videoURL: "https://www.youtube.com/watch?v=R9Q_y7K03jE"
      },
      {
        id: 585,
        title: "aggregate Martin Gloves",

        order: 5,
        videoURL: "https://www.youtube.com/watch?v=R9Q_y7K03jE"
      },
      {
        id: 623,
        title: "Home Nitrogen resource Frozen strait Car transform",

        order: 6,
        videoURL: "https://www.youtube.com/watch?v=uxQxd_z_uqc"
      }
    ]
  },
  {
    id: 118,
    description:
      "apud radian Soul Volkswagen opposite Vermont Research Honda Hybrid eius",
    title: "Mini Cab kindhearted",
    order: 4,
    items: [
      {
        id: 656,
        title: "North",

        order: 1,
        videoURL: "https://www.youtube.com/watch?v=uxQxd_z_uqc"
      },
      {
        id: 689,
        title: "Oklahoma Bicycle South Avon male",

        order: 2,
        videoURL: "https://www.youtube.com/watch?v=uxQxd_z_uqc"
      },
      {
        id: 724,
        title: "Outdoors Wagon Frozen",

        order: 3,
        videoURL: "https://www.youtube.com/watch?v=uxQxd_z_uqc"
      },
      {
        id: 760,
        title: "Beauty embrace fuchsia West intensely Bradley Southwest Gloves",

        order: 4,
        videoURL: "https://www.youtube.com/watch?v=uxQxd_z_uqc"
      },
      {
        id: 795,
        title: "Norway Cerium functionalities generate West Gloves candela",

        order: 5,
        videoURL: "https://www.youtube.com/watch?v=R9Q_y7K03jE"
      },
      {
        id: 831,
        title: "PCI",

        order: 6,
        videoURL: "https://www.youtube.com/watch?v=uxQxd_z_uqc"
      }
    ]
  }
];

export const Primary = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  return (
    <Accordion
      className='w-[500px]'
      sections={sections}
      expandedSections={expandedSections}
      setExpandedSections={setExpandedSections}
      onSectionItemClick={sectionItem => {
        action("onSectionItemClick")(sectionItem);
      }}
    />
  );
};
