import { useState } from 'react'
import API from '../api/axios'


const [assests,setAssets]=useState([]);
const [name,setName]=useState("");

const fetchAsset