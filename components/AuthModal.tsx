"use client"

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { useRouter } from "next/navigation";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import Modal from "@/components/Modal";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";

const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const { session } = useSessionContext();
    const { onClose, isOpen} = useAuthModal();

    useEffect(() => {
        if(session) {
            router.refresh();
            onClose();
        }
    },[session,router, onClose]);

    const onChange = (open: boolean) => {
        if(!open) {
            onClose();
        }
    }
    return (
        <Modal
            title="Welcome Back!"
            description="Please login to continue"
            isOpen={isOpen}
            onChange={()=>{}}
        >
            <Auth 
            theme="dark"
            magicLink={true}
            providers={['github']}
            supabaseClient={supabaseClient} 
            appearance={{
                theme: ThemeSupa,
                variables: {
                    default: {
                        colors: {
                            brand: '#404040',
                            brandAccent: '#22c55e'
                        }
                    }
                }
            }}
            />
        </Modal>
    )
}

export default AuthModal;