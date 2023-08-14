import { createSlice } from "@reduxjs/toolkit";

interface InfoState {
  petSmart: [
    {
      title: string;
      price: string;
      image: string;
      address: string;
    }
  ];
  petValue: [
    {
      title: string;
      price: string;
      image: string;
      address: string;
    }
  ];
  walmart: [
    {
      title: string;
      price: string;
      image: string;
      address: string;
    }
  ];
  canadiantire: [
    {
      title: string;
      price: string;
      image: string;
      address: string;
    }
  ];
}

const initialState: InfoState = {
  petSmart: [
    {
      title: "",
      price: "",
      image: "",
      address: "",
    },
  ],
  petValue: [
    {
      title: "",
      price: "",
      image: "",
      address: "",
    },
  ],
  walmart: [
    {
      title: "",
      price: "",
      image: "",
      address: "",
    },
  ],
  canadiantire: [
    {
      title: "",
      price: "",
      image: "",
      address: "",
    },
  ],
};
