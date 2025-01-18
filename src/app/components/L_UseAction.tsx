"use client"
import React, { useActionState } from 'react'
import { addToCart } from '@/action/server'
const L_UseAction = ({ itemTitle, itemId }: { itemTitle: string, itemId: number }) => {
    const [formState, formAction, isPending] = useActionState(addToCart, null);
    return (
        <form action={formAction}>
            <h2>{itemTitle}</h2>
            <input type="hidden" name="itemId" value={itemId} />
            <button type="submit">Add to Cart</button>
            {isPending && "Loading..."}
            {formState?.success &&
                <div className="toast">
                    Added to cart! Your cart now has {formState.cartSize} items.
                </div>
            }
            {formState?.success === false &&
                <div className="error">
                    Failed to add to cart: {formState.message}
                </div>
            }
        </form>
    )
}

export default L_UseAction