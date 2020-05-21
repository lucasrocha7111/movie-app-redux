//
//  Search.swift
//  movieappredux
//
//  Created by Lucas Rocha on 21/05/20.
//

import Foundation

@objc(Search)
class Search: NSObject {
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc
  static var text = ""
  
  @objc
  func setText(_ text: NSString) {
    Search.text = text as String
  }
  
  @objc
  func getText(_ callback: RCTResponseSenderBlock) {
    callback([NSNull(), String(Search.text)])
  }
}


