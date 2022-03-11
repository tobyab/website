import prisma from '../../../lib/prisma';
import { signIn, useSession } from 'next-auth/react';
var Filter = require('bad-words'),

filter = new Filter();

export default function checkAuthState() {
    const { data: session, status } = useSession()
  
    if (status === "authenticated") {
      return this.htmlToAdd = '<form>hello world</form>';
    }
  }