package com.movieappredux;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class Search extends ReactContextBaseJavaModule  {

    private static String text = "";
    public Search(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void getText(
            Callback successCallback) {
        successCallback.invoke(null, text);

    }

    @ReactMethod
    public void setText(String newText) {
        text = newText;
        System.out.println("New text" + text);
    }

    @Override
    public String getName() {
        return "Search";
    }

}