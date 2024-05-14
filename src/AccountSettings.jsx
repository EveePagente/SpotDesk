import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function AccountSettings() {
    return (
        <div className="p-12">
            <label className="font-bold text-3xl mb-8 block" htmlFor="account-settings">Account Settings</label>
            
            <div className="grid w-full max-w-xs items-center gap-1.5 mb-6">
                <Label className="text-md" htmlFor="email">Email</Label>
                <Input disabled type="email" id="email" placeholder="example@email.here" className="w-full"/>
            </div>
    
            <div className="grid w-full max-w-xs items-center gap-1.5">
                <Label className="text-md" htmlFor="password">Password</Label>
                <div className="flex items-center space-x-3 w-full">
                    <Input disabled type="password" id="password" className="flex-1"/>
                    <Button variant="default">Reset Password</Button>
                </div>
            </div>
        </div>
    );
}

export default AccountSettings;
