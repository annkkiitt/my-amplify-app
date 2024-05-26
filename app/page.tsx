"use client"

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { Registration } from '@/components/Registration';
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

export default function Home() {
  return (
    <>
        <Authenticator>
        {({ signOut, user }) => 
        (
            <Registration/>
        )
        }
      </Authenticator>
    </>
  );
}
