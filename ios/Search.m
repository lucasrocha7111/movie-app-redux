//
//  Search.m
//  movieappredux
//
//  Created by Lucas Rocha on 21/05/20.
//

// #import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Search, NSObject)

RCT_EXTERN_METHOD(setText: (NSString)text)
RCT_EXTERN_METHOD(getText: (RCTResponseSenderBlock)callback)

@end
