'use client'
import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import NewFeed from '@/components/NewFeed'
import Footer from '@/components/Footer'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { supabase } from '@/lib/supabase/client'

export default function Home() {

  const { getUser } = useKindeBrowserClient();
  const user = getUser();

  useEffect(() => {
    if (user) {
      updateUserInfo(user);
    }
  }, [user]);

  const updateUserInfo = async (user) => {
    try {
      const { data, error } = await supabase
        .from('user')
        .upsert({
          kinde_uuid: user.id,
          name: user.given_name + " " + user.family_name,
          profile_picture: user.picture
        });

      if (error) {
        console.error('Error updating user info:', error);
        return { success: false, error };
      }

      console.log('User info updated successfully:', data);
      return { success: true, data };
    } catch (err) {
      console.error('Unexpected error:', err);
      return { success: false, error: err };
    }
  };




  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
  return (
    <main>
      <div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide h-[420px]"><img src="https://images.unsplash.com/photo-1453806839674-d1a9087ca1ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='img' /></div>
            <div className="embla__slide h-[420px]"><img src="https://images.unsplash.com/photo-1473621038790-b778b4750efe?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='img' /></div>
            <div className="embla__slide h-[420px]"><img src="https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='img' /></div>
          </div>
        </div>
      </div>
      <NewFeed />
      <Footer />
    </main>
  );
}
